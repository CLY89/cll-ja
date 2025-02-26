/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //mySidebar: [{type: 'autogenerated', dirName: '.'}],
  mySidebar: [
    {
      type: 'category',
      label: '全てのドキュメント',
      items: ['all-index/document_index'],
    },
    {
      type: 'category',
      label: 'TCLL各章',
      items: ['cll-ja/chapter1', 'cll-ja/chapter2', 'cll-ja/chapter3', 'cll-ja/chapter4', 'cll-ja/chapter5', 'cll-ja/chapter6'],
    },
    {
      type: 'category',
      label: 'PEG',
      items: ['peg/about-peg'],
    },
  ],
};

module.exports = sidebars;
