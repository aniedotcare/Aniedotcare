import { test } from 'node:test';
import assert from 'node:assert';
import { convertMarkdownToHTML } from '../src/utils.js';

test('convertMarkdownToHTML - H3 heading', () => {
    const input = '### Hello World';
    const expected = '<h3>Hello World</h3>';
    assert.strictEqual(convertMarkdownToHTML(input), expected);
});

test('convertMarkdownToHTML - Single list item', () => {
    const input = '* Item 1';
    const expected = '<ul><li>Item 1</li></ul>';
    assert.strictEqual(convertMarkdownToHTML(input), expected);
});

test('convertMarkdownToHTML - Multiple list items', () => {
    const input = '* Item 1\n* Item 2';
    // The converter replaces each '* item' with '<ul><li>item</li></ul>'
    // then replaces '</ul>\n<ul>' with ''
    // result should be '<ul><li>Item 1</li><li>Item 2</li></ul>'
    const expected = '<ul><li>Item 1</li><li>Item 2</li></ul>';
    assert.strictEqual(convertMarkdownToHTML(input), expected);
});

test('convertMarkdownToHTML - Mixed content', () => {
    const input = '### Header\n* Item 1\n* Item 2';
    const expected = '<h3>Header</h3>\n<ul><li>Item 1</li><li>Item 2</li></ul>';
    assert.strictEqual(convertMarkdownToHTML(input), expected);
});

test('convertMarkdownToHTML - Empty string', () => {
    assert.strictEqual(convertMarkdownToHTML(''), '');
});

test('convertMarkdownToHTML - No markdown', () => {
    const input = 'Plain text';
    assert.strictEqual(convertMarkdownToHTML(input), input);
});

test('convertMarkdownToHTML - Case insensitivity for ###', () => {
    // Current regex is /### (.*$)/gim - 'i' flag is there but # isn't a letter.
    // Testing if it handles text after ### correctly
    const input = '### text';
    assert.strictEqual(convertMarkdownToHTML(input), '<h3>text</h3>');
});

test('convertMarkdownToHTML - Handles multiple headers', () => {
    const input = '### Header 1\n### Header 2';
    const expected = '<h3>Header 1</h3>\n<h3>Header 2</h3>';
    assert.strictEqual(convertMarkdownToHTML(input), expected);
});
