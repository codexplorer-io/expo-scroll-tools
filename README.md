# expo-scroll-tools
Scrollable panel with actions for react-native & expo.

## Platform Compatibility
iOS|Android|Web|
-|-|-|
✅|✅|❌|

## Samples
<img title="video" src="https://github.com/codexplorer-io/expo-scroll-tools/blob/main/samples/video.gif?raw=true">

## Usage
```javascript
import { ScrollTools } from '@codexporer.io/expo-scroll-tools';
import { MaterialIcons } from '@expo/vector-icons';
...

export const MyComponent = () => {
    const actions = [
        {
            title: 'First Action',
            icon: <MaterialIcons name='short-text' size={32} color={theme.colors.primary} />,
            handler: () => { ... }
        },
        {
            title: 'Second Action',
            icon: <MaterialIcons name='format-color-fill' size={32} color={theme.colors.primary} />,
            handler: () => { ... }
        },
        {
            title: 'Third Action',
            icon: <MaterialIcons name='format-color-text' size={32} color={theme.colors.primary} />,
            handler: () => { ... },
            disabled: true
        }
    ];
    ...
    
    return (
        <>
            <ScrollTools actions={actions} />
            ...
        </>
    );
};
```

## Exports
symbol|description|
-|-|
ScrollTools|scroll tools component|

## ScrollTools component
Component that renders scrollable actions

### Props
option|description|
-|-|
actions|array of actions containig object with properties (title, icon, handler & disabled). `title` is text rendered as action title, below the `icon` (default: null). `handler` is function invoked on button click. `disabled` (default: false) is boolean indicating whenever button for action should be disabled or not.|
