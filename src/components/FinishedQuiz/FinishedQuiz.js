import React from 'react'
import Button from '../UI/Button/Button';
import styles from './FinishedQuiz.module.css';

const FinishedQuiz = props => {

  const successCount = Object.keys(props.results).reduce((acc, key) => {
      if(props.results[key] === 'success') {
        acc++
      }
      return acc
  },0)
  return (
    <div className={styles.FinishedQuiz}>
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            'fa',
            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
            styles[props.results[quizItem.id]]
          ]
          

          return (
            <li key={index}
            >
              <strong>{index + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={cls.join(' ')}/>
            </li>
          )
        })}
        
      </ul>
      <p>Правильно {successCount} из {props.quiz.length}</p>
      <div>
        <Button onClick={props.onRetry} type='primary'>Повторить</Button>
        <Button type='success'>Перейти в список тестов</Button>
      </div>
    </div>
  )
}
export default FinishedQuiz