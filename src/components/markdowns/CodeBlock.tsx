import SyntaxHighlighter from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = (props: { language: any; value: any }) => {
  const { language, value } = props;
  return (
    <SyntaxHighlighter
      language={language}
      style={Object.assign(coy, {
        'pre[class*="language-"]': {
          border: '1px solid #ddd',
          borderRadius: '5px',
          padding: '10px',
        },
      })}
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
