(function(Scratch) {
  'use strict';

  class TestExtension {
    getInfo() {
      return {
        id: 'testextension',
        name: 'Test Extension',
        blocks: [
          {
            opcode: 'hello',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Say Hello'
          }
        ]
      };
    }

    hello() {
      return 'Hello, PenguinMod!';
    }
  }

  Scratch.extensions.register(new TestExtension());
})(Scratch);
