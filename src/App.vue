<template>
  <div id="quiz" class="chart" v-cloak>
    <h5 class="chart__title">{{ quiz.title }}</h5>

    <div v-for="(question, index) in quiz.questions">
      <div v-show="index === questionIndex">
        <p><strong>{{ question.text }}</strong></p>
        <ul>
          <li v-for="(response, responseIndex) in question.responses" :class="responseClass(index, responseIndex)">
            <label>
              <input type="radio"
                     :value="response.value"
                     :name="index"
                     @click="handleChange(index, responseIndex)"
                     v-model="userResponses[index]">
              <span>{{response.text}}</span>
            </label>
          </li>
        </ul>
      </div>
    </div>

    <div class="quiz-nav" v-if="questionIndex !== quizLength">
      <div class="progress-report">{{ progressReport }}</div> 
      <progress max="1" class="progress is-small" :value="progress"></progress>
    </div>

    <div v-show="questionIndex === quizLength" class="quiz-results">
      <h3>Your results</h3>
      <p>You'd probably enjoy: <span>{{ score() }}</span></p>
    </div>
  </div> <!-- #quiz -->

</template>

<script>
import styles from './quiz-style.css'
import quiz from './quiz-specialty.js'

export default {

  name: 'app',

  methods: {

    responseClass(index, responseIndex) {
      return `q-${index}-r-${responseIndex}`
    },

    handleChange(index, responseIndex) {

      const selector = '.q-' + index + '-r-' + responseIndex
      const listElem = document.querySelector(selector)
      //listElem.classList.add('highlight')
      
      window.setTimeout(() => {
        this.questionIndex++
        //listElem.classList.remove('highlight')
      }, 500)
    },

    next() {
      return
    },

    score() {

      //find the highest occurence in responses
      const modeMap = {}

      let maxEl = this.userResponses[0],
          maxCount = 1

      for (let i = 0; i < this.userResponses.length; i++) {

        let el = this.userResponses[i]

        if (modeMap[el] == null) {
          modeMap[el] = 1
        } else {
          modeMap[el]++
        }

        if (modeMap[el] > maxCount) {
          maxEl = el
          maxCount = modeMap[el]
        }
      }

      return maxEl
    }
  },

  computed: {

    progress() {
      return this.questionIndex / this.quizLength
    },

    quizLength() {
      return this.quiz.questions.length
    },

    progressReport() {
      const isPlural = this.quizLength !== 1
      return `${this.questionIndex} of ${this.quizLength} question${isPlural ? 's' : ''} answered`
    }
  },


  data () {
    return {
      quiz,
      questionIndex: 0,
      userResponses: []
    }
  }
}
</script>

<style lang="scss">
</style>
