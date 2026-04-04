// Simple markdown to HTML converter
export function convertMarkdownToHTML(markdownText) {
    if (!markdownText) return '';
    return markdownText
        .replace(/### (.*$)/gim, '<h3>$1</h3>')
        .replace(/\* (.*$)/gim, '<ul><li>$1</li></ul>')
        .replace(/<\/ul>\n<ul>/gim, '');
}
