let Speech = {

  componentDidMount() {
    if (window.webkitSpeechRecognition) {
      this.recognition = new webkitSpeechRecognition();
      this.recognition.onresult = this.onResult;
      this.recognition.continuous = true;
      this.recognition.start();
    }
  },

  componentWillUnmount() {
    if (this.recognition) {
      this.recognition.stop();
    }
  },

  onResult(e) {
    let transcript = this.getLastTranscript(e.results);
    this.getSpeechConfig().forEach(this.findMatch.bind(this, transcript));
  },

  getLastTranscript(results) {
    return results[results.length - 1][0].transcript;
  },

  findMatch(transcript, config) {
    if (transcript.indexOf(config.word) > -1) {
      this.runAction(config.action);
      this.runFeedback(config.feedback);
    }
  },

  runAction(action) {
    if (typeof this[action] === 'function') {
      this[action]();
    }
  },

  runFeedback(feedback) {
    if (feedback && window.SpeechSynthesisUtterance) {
      let message = new SpeechSynthesisUtterance(feedback);
      speechSynthesis.speak(message);
    }
  }

};

export default Speech;
