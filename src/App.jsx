
import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Course from './components/Course/Course'
import Header from './components/Header/Header'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0)
  const [remaining, setRemaining] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);



  const handerselectBtn = (course) => {
    const isAvailable = selectedCourse.find(item => item.id == course.id);
    let count = parseInt(course.credit)
    let totalPrice = course.price
    if (isAvailable) {
      toast.warning("You have already selected this course", { position: 'top-center' }
      );
    }
    else {
      selectedCourse.forEach(item => {
        count = count + parseInt(item.credit);
      });
      const remaining = 20 - count;
      if (count > 20) {
        return toast.error(" You can not take more than 20", { position: 'top-center' })
      }
      else {
        selectedCourse.forEach(price => {
          totalPrice = totalPrice + price.price;
        })
        setTotalPrice(totalPrice)
        setTotalCredit(count);
        setRemaining(remaining)
        setSelectedCourse([...selectedCourse, course])
      }
    }


  }



  return (
    <>

      <Header></Header>
      <ToastContainer></ToastContainer>

      <main className='max-w-screen-2xl mx-auto flex'>
        <Course handerselectBtn={handerselectBtn}></Course>
        <Bookmarks datapas={selectedCourse} addcredit={totalCredit} remaining={remaining} totalPrice={totalPrice}></Bookmarks>
      </main>

    </>
  )
}

export default App
