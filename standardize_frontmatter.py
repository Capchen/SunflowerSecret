#!/usr/bin/env python3
import os
import re
import yaml

# Directory to search for Markdown files
src_dir = "/tmp/tmpua277z8o_run_Capchen_SunflowerSecret_issue_3_92983f6a/src"

# Regular expression to extract YAML frontmatter
frontmatter_pattern = re.compile(r'^---\s*\n(.*?)\n---', re.DOTALL)

# Function to standardize frontmatter
def standardize_frontmatter(content):
    match = frontmatter_pattern.search(content)
    if not match:
        return content  # No frontmatter found
    
    # Extract the frontmatter
    frontmatter_text = match.group(1)
    
    try:
        # Parse the frontmatter as YAML
        frontmatter = yaml.safe_load(frontmatter_text)
        
        # Ensure all required fields exist
        frontmatter = {
            'title': frontmatter.get('title', ''),
            'shortTitle': frontmatter.get('shortTitle', ''),
            'description': frontmatter.get('description', ''),
            'icon': frontmatter.get('icon', ''),
            'author': frontmatter.get('author', {'name': 'Cap'}),
            'isOriginal': frontmatter.get('isOriginal', True),
            'date': frontmatter.get('date', ''),
            'category': frontmatter.get('category', ''),
            'tag': frontmatter.get('tag', ''),
            'sticky': frontmatter.get('sticky', 1),
            'star': frontmatter.get('star', False),
            'article': frontmatter.get('article', True),
            'timeline': frontmatter.get('timeline', True),
            'image': frontmatter.get('image', ''),
            'editLink': frontmatter.get('editLink', False)
        }
        
        # Convert the frontmatter back to YAML
        new_frontmatter = yaml.dump(frontmatter, default_flow_style=False, allow_unicode=True)
        
        # Replace the old frontmatter with the new one
        new_content = content[:match.start()] + '---\n' + new_frontmatter + '---\n' + content[match.end():]
        return new_content
    
    except Exception as e:
        print(f"Error processing frontmatter: {e}")
        return content

# Function to process a Markdown file
def process_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content = standardize_frontmatter(content)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated: {file_path}")
        else:
            print(f"No changes needed: {file_path}")
    
    except Exception as e:
        print(f"Error processing file {file_path}: {e}")

# Find and process all Markdown files
def process_all_files():
    count = 0
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                process_file(file_path)
                count += 1
    
    print(f"Processed {count} Markdown files")

if __name__ == "__main__":
    process_all_files()