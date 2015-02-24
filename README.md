React Speech
============

Speech Recognition mixin for React.js

Usage
-----

```javascript
mixins: [Speech],

getSpeechConfig() {
  return [{
    word: 'click',
    action: 'handleClick',
    feedback: 'clicking'
  }];
},

handleClick() {
  console.log('clicked');
}
```
