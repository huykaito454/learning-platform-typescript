import React, { useEffect } from 'react'
import ExplanationModal from '../../modules/student/ExplanationModal'
import QuestionCard from 'modules/student/QuestionCard'
import { useDispatch, useSelector } from 'react-redux'
import {
  getQuestionList,
  setQuestionList,
} from '../../store/questionlist/questionListSlice'
import Loading from '../../components/Loading/Loading'
const StudentAssignment = () => {
  const { questionList } = useSelector((state: any) => state.questionList)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getQuestionList())
  }, [dispatch])
  return (
    <div className="w-full flex flex-col items-start gap-10">
      {!questionList && <Loading></Loading>}
      <div className="w-full flex justify-end">
        <div
          className="button border-primary"
          onClick={() => {
            dispatch(setQuestionList(null))
            dispatch(getQuestionList())
          }}
        >
          Reset all questions
        </div>
      </div>
      <div className="w-full grid grid-cols-1 gap-10">
        {questionList &&
          questionList.length > 0 &&
          questionList.map((item: any, index: any) => (
            <QuestionCard
              key={item.id}
              item={item}
              index={index}
            ></QuestionCard>
          ))}
      </div>
      <ExplanationModal></ExplanationModal>
    </div>
  )
}

export default StudentAssignment
