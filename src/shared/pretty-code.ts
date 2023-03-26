
import { type Options } from 'rehype-pretty-code';


export const rehypePrettyCodeOptions = (themePath: any): Partial<Options>  =>   ({
  theme: themePath,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  tokensMap: {
    fn: 'entity.name.function',
    objKey: 'meta.object-literal.key',
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['word'];
  },
});