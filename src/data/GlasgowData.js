const scale = {
  eye: {
    1: { text: "No eye opening", score: 1 },
    2: { text: "Eye opening to pain", score: 2 },
    3: { text: "Eye opening to sound", score: 3 },
    4: { text: "Eyes open spontaneously", score: 4 }
  },
  verbal: {
    1: { text: "No verbal response", score: 1 },
    2: { text: "Incomprehensible sounds", score: 2 },
    3: { text: "Inappropriate words", score: 3 },
    4: { text: "Confused, disoriented", score: 4 },
    5: { text: "Oriented, converses normally", score: 5 }
  },
  motor: {
    1: { text: "No motor response", score: 1 },
    2: { text: "Abnormal extension to pain ", score: 2 },
    3: { text: "Abnormal flexion to pain", score: 3 },
    4: { text: "Withdrawal from pain", score: 4 },
    5: { text: "Localizing pain", score: 5 },
    6: { text: "Obeys commands", score: 6 }
  }
}

export { scale }

