import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = './public';

// 最適化対象と設定
const optimizations = [
  // 大きすぎる画像をリサイズ + 圧縮
  {
    input: 'images/service-meetup.jpg',
    output: 'images/service-meetup.jpg',
    width: 1200, // 表示600px × 2(retina)
    format: 'jpeg',
    quality: 82,
  },
  {
    input: 'images/history-2024.jpg',
    output: 'images/history-2024.jpg',
    width: 1000, // 表示500px × 2
    format: 'jpeg',
    quality: 82,
  },
  {
    input: 'images/history-2025.jpg',
    output: 'images/history-2025.jpg',
    width: 1000,
    format: 'jpeg',
    quality: 82,
  },
  // PNG → WebP変換（大幅に軽量化）
  {
    input: 'media/Forbes.png',
    output: 'media/Forbes.webp',
    width: 1030, // 元サイズ維持
    format: 'webp',
    quality: 85,
  },
  {
    input: 'news/sushi20250510.png',
    output: 'news/sushi20250510.webp',
    width: 1280,
    format: 'webp',
    quality: 85,
  },
  {
    input: 'news/sushi20250208.png',
    output: 'news/sushi20250208.webp',
    width: 1280,
    format: 'webp',
    quality: 85,
  },
  // その他の大きめの画像
  {
    input: 'images/service-mockup.png',
    output: 'images/service-mockup.webp',
    width: 1200,
    format: 'webp',
    quality: 85,
  },
  {
    input: 'images/fastpass.png',
    output: 'images/fastpass.webp',
    width: 1000,
    format: 'webp',
    quality: 85,
  },
  {
    input: 'images/service-fastpass.png',
    output: 'images/service-fastpass.webp',
    width: 900,
    format: 'webp',
    quality: 85,
  },
  {
    input: 'images/service-bestteach.png',
    output: 'images/service-bestteach.webp',
    width: 900,
    format: 'webp',
    quality: 85,
  },
  {
    input: 'images/history-bestteach.png',
    output: 'images/history-bestteach.webp',
    width: 800,
    format: 'webp',
    quality: 85,
  },
  // 大きめのJPEG圧縮
  {
    input: 'images/contact-1.jpg',
    output: 'images/contact-1.jpg',
    width: 800,
    format: 'jpeg',
    quality: 80,
  },
  {
    input: 'images/contact-4.jpg',
    output: 'images/contact-4.jpg',
    width: 800,
    format: 'jpeg',
    quality: 80,
  },
  {
    input: 'images/service-aicf.jpg',
    output: 'images/service-aicf.jpg',
    width: 1200,
    format: 'jpeg',
    quality: 82,
  },
  {
    input: 'images/related-executives.jpg',
    output: 'images/related-executives.jpg',
    width: 800,
    format: 'jpeg',
    quality: 80,
  },
  {
    input: 'images/company-office.jpg',
    output: 'images/company-office.jpg',
    width: 1200,
    format: 'jpeg',
    quality: 82,
  },
  {
    input: 'images/related-company.jpg',
    output: 'images/related-company.jpg',
    width: 800,
    format: 'jpeg',
    quality: 80,
  },
  // ロゴ最適化
  {
    input: 'logo.png',
    output: 'logo.webp',
    width: 400,
    format: 'webp',
    quality: 90,
  },
  {
    input: 'logo-footer.png',
    output: 'logo-footer.webp',
    width: 300,
    format: 'webp',
    quality: 90,
  },
];

async function optimizeImage(config) {
  const inputPath = path.join(PUBLIC_DIR, config.input);
  const outputPath = path.join(PUBLIC_DIR, config.output);

  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  スキップ: ${config.input} (ファイルなし)`);
    return null;
  }

  const inputStats = fs.statSync(inputPath);
  const inputSize = inputStats.size;

  try {
    let pipeline = sharp(inputPath).resize(config.width, null, {
      withoutEnlargement: true,
      fit: 'inside',
    });

    if (config.format === 'jpeg') {
      pipeline = pipeline.jpeg({ quality: config.quality, mozjpeg: true });
    } else if (config.format === 'webp') {
      pipeline = pipeline.webp({ quality: config.quality });
    } else if (config.format === 'png') {
      pipeline = pipeline.png({ compressionLevel: 9 });
    }

    // 出力ディレクトリ作成
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // 一時ファイルに出力（同じファイルの場合のため）
    const tempPath = outputPath + '.tmp';
    await pipeline.toFile(tempPath);

    // 一時ファイルを本番に移動
    fs.renameSync(tempPath, outputPath);

    const outputStats = fs.statSync(outputPath);
    const outputSize = outputStats.size;
    const reduction = ((1 - outputSize / inputSize) * 100).toFixed(1);

    return {
      input: config.input,
      output: config.output,
      inputSize,
      outputSize,
      reduction,
    };
  } catch (error) {
    console.error(`❌ エラー: ${config.input} - ${error.message}`);
    return null;
  }
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

async function main() {
  console.log('🖼️  画像最適化を開始...\n');

  const results = [];
  let totalInputSize = 0;
  let totalOutputSize = 0;

  for (const config of optimizations) {
    const result = await optimizeImage(config);
    if (result) {
      results.push(result);
      totalInputSize += result.inputSize;
      totalOutputSize += result.outputSize;
      console.log(
        `✅ ${result.input} → ${result.output}: ${formatSize(result.inputSize)} → ${formatSize(result.outputSize)} (-${result.reduction}%)`
      );
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`📊 合計: ${formatSize(totalInputSize)} → ${formatSize(totalOutputSize)}`);
  console.log(`📉 削減: ${formatSize(totalInputSize - totalOutputSize)} (-${((1 - totalOutputSize / totalInputSize) * 100).toFixed(1)}%)`);
  console.log('='.repeat(60));

  // PNG→WebP変換したファイルのリスト
  const webpConversions = results.filter(r => r.output.endsWith('.webp') && !r.input.endsWith('.webp'));
  if (webpConversions.length > 0) {
    console.log('\n⚠️  以下のファイルはWebPに変換されました。コード内の参照を更新してください:');
    webpConversions.forEach(r => {
      console.log(`   ${r.input} → ${r.output}`);
    });
  }
}

main().catch(console.error);
