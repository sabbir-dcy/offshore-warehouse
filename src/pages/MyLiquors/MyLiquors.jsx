import React, { useEffect, useState } from 'react'
import bin from '../../assets/icon/bin.svg'
import axios from 'axios'
import { motion } from 'framer-motion'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebase.init'
import { useNavigate } from 'react-router-dom'
import { Modal } from '../../components'

const MyLiquors = () => {
  const [liquors, setLiquors] = useState([])
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  const [fetched, setFetched] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [_id, set_id] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/my_liquors', {
        params: {
          email: user?.email,
        },
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        setFetched(true)
        setLiquors(res.data)
      })
  }, [user])

  const removeFromMyList = (_id) => {
    setShowModal(true)
    set_id(_id)
  }

  function confirm() {
    axios.delete(`http://localhost:5000/api/liquor/${_id}`).then((res) => {
      console.log(res)
      const rest = liquors.filter((liquor) => liquor._id !== _id)
      setLiquors(rest)
    })
  }

  return (
    <>
      {showModal && (
        <Modal confirm={confirm} setShowModal={setShowModal}></Modal>
      )}
      <div className='w-full md:w-4/5 lg:w-1/2 mx-auto bg-brown-extra-light p-6 rounded-2xl my-12'>
        <div className='grid grid-cols-4 justify-items-center'>
          <p className='font-medium'>product</p>
          <p className='font-medium'>price</p>
          <p className='font-medium'>quantity</p>
          <p className='font-medium'>action</p>
        </div>

        {liquors.length === 0 && fetched ? (
          <div className='grid justify-items-center gap-y-5'>
            <p className='mt-5 font-semibold text-brown-500'>
              this user haven't added any item yet
            </p>
            <button
              className='bg-brown-900 text-brown-50 p-2 rounded'
              onClick={() => navigate('/addProduct')}
            >
              add item now
            </button>
          </div>
        ) : undefined}
        {liquors.map((liquor, index) => (
          <motion.div
            key={liquor._id}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
              delay: index * 0.1,
            }}
          >
            <MyLiquor
              liquor={liquor}
              removeFromMyList={removeFromMyList}
            ></MyLiquor>
          </motion.div>
        ))}
      </div>
    </>
  )
}

function MyLiquor({ liquor, removeFromMyList }) {
  const { productName, productPrice, thumbnail, quantity, _id } = liquor
  return (
    <div className='grid grid-cols-4 bg-white my-5 items-center justify-items-center rounded-2xl hover:bg-brown-50'>
      <div className='flex items-center '>
        <img className='h-10' src={thumbnail} alt='' />
        <p>{productName}</p>
      </div>
      <p>$ {productPrice}</p>
      <p>{quantity}</p>
      <button>
        <img src={bin} alt='' onClick={() => removeFromMyList(_id)} />
      </button>
    </div>
  )
}

export default MyLiquors
