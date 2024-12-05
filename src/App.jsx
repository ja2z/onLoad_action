import { useEffect } from 'react';
import './App.css';
import {
  useConfig,
  useEditorPanelConfig,
  useActionTrigger,
} from '@sigmacomputing/plugin';

function App() {
  useEditorPanelConfig([
    // { type: 'element', name: 'source' },
    // {
    //   type: 'column',
    //   name: 'measure',
    //   source: 'source',
    //   allowMultiple: false,
    //   allowedTypes: ['number', 'integer'],
    // },
    {
      type: 'action-trigger',
      name: 'onLoadAction',
      label: 'onLoad',
    },
  ]);

  const config = useConfig();
  const triggerOnLoadAction = useActionTrigger(config.onLoadAction);

  useEffect(() => {
    triggerOnLoadAction();
  }, [triggerOnLoadAction]);

  return <div style={{ backgroundColor: 'transparent' }}></div>;
}

export default App;