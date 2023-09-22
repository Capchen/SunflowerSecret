const fs = require('fs');
const path = require('path');

// 要插入的内容


function setContent(name) {
  const frontMatter = `---
  title: '${name}'
  shortTitle: ''
  description: ''
  icon: ''
  author:
    name: 'Cap'
  isOriginal: true
  date: 2020-06-18
  category: ''
  tag: 'emotibot'
  sticky: 1
  star: false
  article: true
  timeline: true
  image: ''
  banner: ''
---

  `;
  return frontMatter
}


// 获取当前目录下的所有文件
const files = fs.readdirSync(__dirname);

// 遍历文件并处理 Markdown 文件
files.forEach((file) => {
  if (file.endsWith('.md')) {
    const fileName = file.split('.')[0]
    const filePath = path.join(__dirname, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // 检查文件头部是否已经有 YAML Front Matter
    if (!fileContent.startsWith('---')) {
      // 插入 YAML Front Matter 到文件头部
      fs.writeFileSync(filePath, setContent(fileName) + fileContent, 'utf-8');
      console.log(`插入 YAML Front Matter 到文件: ${file}`);
    } else {
      console.log(`文件 ${file} 已包含 YAML Front Matter，跳过处理`);
    }
  }
});

console.log('处理完成！');
