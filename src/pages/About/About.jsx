import React, { useState } from 'react'
import './About.css'
import { motion } from 'framer-motion'

const About = () => {
  const [arrange, setArrange] = useState(false)
  return (
    <>
      <div id='about-bg' className='min-h-screen w-full select-none'>
        <div className='bg-black bg-opacity-60 min-h-screen p-14'>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
          >
            <div className='lg:w-3/5 mx-auto'>
              <button
                className='bg-primary text-white p-4 rounded'
                onClick={() => setArrange(!arrange)}
              >
                {arrange ? 'unorganize' : 'organize'}
              </button>
            </div>
            <div
              className={
                !arrange
                  ? `lg:grid grid-cols-4 lg:w-3/5 mx-auto gap-8 bg-white p-8 -rotate-12 -skew-x-2 items-center transition-all`
                  : `lg:grid grid-cols-4 lg:w-3/5 mx-auto gap-8 bg-white p-8 items-center transition-all`
              }
            >
              <div className=''>
                <svg
                  className='w-12 mx-auto hidden lg:block h-fit'
                  width='260'
                  height='268'
                  viewBox='0 0 260 268'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M103.002 185.074L109.882 181.102C112.686 179.483 113.647 175.897 112.028 173.092L98.9916 150.513C97.9056 148.632 95.9346 147.58 93.9086 147.58C92.9136 147.58 91.9056 147.833 90.9826 148.367L84.1026 152.339C83.1576 152.884 82.1556 153.133 81.1796 153.133C78.1166 153.133 75.3076 150.684 75.3076 147.261V139.317C75.3076 136.079 72.6826 133.453 69.4436 133.453H43.3706C40.1326 133.453 37.5066 136.078 37.5066 139.317V147.261C37.5066 150.684 34.6966 153.133 31.6346 153.133C30.6586 153.133 29.6566 152.884 28.7116 152.339L21.8316 148.367C20.9086 147.834 19.8996 147.581 18.9056 147.58C16.8786 147.58 14.9086 148.632 13.8226 150.513L0.786632 173.092C-0.832368 175.897 0.128632 179.483 2.93263 181.102L9.81263 185.074C13.7216 187.331 13.7216 192.973 9.81263 195.23L2.93263 199.202C0.127632 200.821 -0.832368 204.407 0.786632 207.212L13.8226 229.791C14.9086 231.672 16.8796 232.724 18.9056 232.724C19.9006 232.724 20.9086 232.47 21.8316 231.937L28.7116 227.965C29.6566 227.42 30.6586 227.171 31.6346 227.171C34.6976 227.171 37.5066 229.62 37.5066 233.043V240.987C37.5066 244.225 40.1316 246.851 43.3706 246.851H69.4426C72.6806 246.851 75.3066 244.226 75.3066 240.987V233.043C75.3066 229.62 78.1166 227.171 81.1786 227.171C82.1546 227.171 83.1566 227.42 84.1016 227.965L90.9816 231.937C91.9046 232.47 92.9136 232.724 93.9076 232.724C95.9346 232.724 97.9046 231.672 98.9906 229.791L112.027 207.212C113.646 204.407 112.685 200.821 109.881 199.202L103.001 195.23C99.0926 192.973 99.0926 187.33 103.002 185.074V185.074ZM56.4076 207.548C46.7996 207.548 39.0116 199.759 39.0116 190.152C39.0116 180.544 46.8006 172.756 56.4076 172.756C66.0146 172.756 73.8036 180.545 73.8036 190.152C73.8036 199.759 66.0146 207.548 56.4076 207.548Z'
                    fill='#4F46E5'
                  />
                  <path
                    d='M98.4788 23.659C95.3328 20.515 90.2358 20.515 87.0898 23.659C83.9448 26.805 83.9448 31.903 87.0898 35.048L101.48 49.437C48.5908 52.056 5.77875 93.599 1.14575 145.943L2.33575 143.881C5.74175 137.981 12.0918 134.316 18.9058 134.317C19.0498 134.317 19.1928 134.33 19.3368 134.334C28.4108 96.613 61.3018 68.083 101.152 65.605L87.0898 79.666C83.9448 82.811 83.9448 87.91 87.0898 91.055C88.6628 92.627 90.7228 93.413 92.7838 93.413C94.8448 93.413 96.9058 92.627 98.4778 91.055L126.482 63.051C127.992 61.54 128.84 59.492 128.84 57.357C128.84 55.221 127.992 53.173 126.482 51.663L98.4788 23.659V23.659Z'
                    fill='#4F46E5'
                  />
                  <path
                    d='M200.238 64.857C218.119 64.857 232.666 50.31 232.666 32.429C232.666 14.547 218.119 0 200.238 0C182.357 0 167.81 14.547 167.81 32.428C167.81 50.309 182.357 64.857 200.238 64.857Z'
                    fill='#4F46E5'
                  />
                  <path
                    d='M263.409 152.276V107.696C263.409 95.356 255.479 84.413 243.752 80.572L243.698 80.554L226.546 77.714C225.086 77.265 223.526 78.038 223.001 79.478L203.539 132.877C202.416 135.958 198.059 135.958 196.937 132.877L177.475 79.478C177.051 78.315 175.953 77.586 174.777 77.586C174.498 77.586 156.778 80.55 156.778 80.55C144.955 84.49 137.055 95.45 137.055 107.844V152.276C137.055 158.935 142.453 164.332 149.111 164.332H251.352C258.012 164.332 263.409 158.934 263.409 152.276V152.276Z'
                    fill='#4F46E5'
                  />
                  <path
                    d='M277.74 162.933C277.067 172.148 269.507 177.791 260.29 178.459C253.228 218.884 219.083 250.099 177.311 252.696L191.372 238.635C194.517 235.489 194.517 230.391 191.372 227.246C188.226 224.102 183.129 224.102 179.983 227.246L151.98 255.25C148.835 258.396 148.835 263.494 151.98 266.639L179.983 294.642C181.556 296.214 183.616 297 185.677 297C187.738 297 189.799 296.214 191.371 294.642C194.516 291.497 194.516 286.398 191.371 283.253L176.982 268.864C233.01 266.09 277.74 219.637 277.74 162.933V162.933Z'
                    fill='#4F46E5'
                  />
                  <path
                    d='M207.306 77.105C206.559 76.291 205.466 75.881 204.36 75.881H196.115C195.01 75.881 193.917 76.291 193.169 77.105C192.012 78.366 191.844 80.187 192.665 81.61L197.072 88.254L195.009 105.659L199.072 116.467C199.468 117.554 201.005 117.554 201.402 116.467L205.465 105.659L203.402 88.254L207.809 81.61C208.631 80.187 208.463 78.366 207.306 77.105V77.105Z'
                    fill='#4F46E5'
                  />
                </svg>
              </div>
              <div className='col-span-3'>
                <h2 className='text-3xl mb-4'>Management system</h2>
                <p>
                  A complete warehouse management system to maintain the
                  warehouse online. An ecosystem where products is managed by
                  professionals. To ensure safety of the products we
                  contineuosly keep tracking on the health of the products.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.4 }}
          >
            <div
              className={
                !arrange
                  ? `mt-4 lg:grid grid-cols-4 lg:w-3/5 mx-auto gap-8 bg-white p-8 rotate-6 skew-x-2 items-center transition-all`
                  : `mt-0 lg:grid grid-cols-4 lg:w-3/5 mx-auto gap-8 bg-white p-8 items-center transition-all`
              }
            >
              <div className=''>
                <svg
                  className='w-10 mx-auto hidden lg:block h-fit'
                  width='277'
                  height='297'
                  viewBox='0 0 277 297'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M180.522 37.043H172.926L175.136 29.5801C175.836 27.1643 176.699 22.9762 176.699 22.9762H176.807C176.807 22.9762 177.669 27.1643 178.367 29.5801L180.522 37.043ZM143.096 26.8979C143.096 23.9997 142.017 22.2823 137.277 22.2823H134.099V31.6193H138.194C141.211 31.6193 143.096 29.9567 143.096 26.8979ZM97.7685 44.6621C103.534 44.6621 108.166 39.7247 108.166 33.1762C108.166 26.8979 103.534 22.1721 97.7685 22.1721C92.0052 22.1721 87.3734 26.8979 87.3734 33.1762C87.3734 39.7247 92.0052 44.6621 97.7685 44.6621ZM240.407 67.04V84.2582H250.915C265.321 84.2582 276.999 95.8956 276.999 110.251V297H226.657V143.87H47.3538V297H0V110.252C0 95.8961 11.6779 84.2587 26.0844 84.2587H36.593V67.0405H13.042C5.83869 67.0405 0 61.2218 0 54.0438V12.9962C0 5.81868 5.83918 0 13.042 0H263.958C271.161 0 277 5.81868 277 12.9962V54.0433C277 61.2213 271.161 67.0395 263.958 67.0395L240.407 67.04ZM240.812 52.6073H265.697V44.5563H250.237V37.3089H261.98V29.2589H250.237V22.2823H264.943V14.2269H240.812V52.6073V52.6073ZM158.709 52.6073H168.403L170.719 44.5563H182.732L185.101 52.6073H194.797L181.708 14.2274H171.797L158.709 52.6073ZM124.672 52.6073H134.099V39.6699H138.517L145.356 52.6073H155.861L148.375 39.1875C147.458 37.5802 146.919 36.8819 146.919 36.8819V36.7717C150.744 34.8383 152.684 30.3838 152.684 26.3054C152.684 20.725 149.935 16.8033 145.572 15.1407C143.902 14.4977 142.017 14.2269 138.086 14.2269H124.672V52.6073ZM77.6235 33.1762C77.6235 44.4505 86.1334 53.2503 97.7685 53.2503C109.403 53.2503 117.916 44.4505 117.916 33.1762C117.916 22.1721 109.403 13.5839 97.7685 13.5839C86.1334 13.5839 77.6235 22.1721 77.6235 33.1762ZM39.7239 41.3369C39.7239 29.204 22.3793 30.0625 22.3793 25.2309C22.3793 23.0859 24.5338 22.2274 26.474 22.2274C31.1059 22.2274 34.9839 25.6075 34.9839 25.6075L38.9705 17.9336C38.9705 17.9336 34.8758 13.5844 26.5802 13.5844C18.9318 13.5844 12.9543 18.2553 12.9543 25.3411C12.9543 37.1488 30.2975 36.9881 30.2975 41.5485C30.2975 43.8585 28.198 44.6111 26.2578 44.6111C21.4092 44.6111 17.0471 40.639 17.0471 40.639L12.0918 47.7753C12.0918 47.7753 17.0992 53.2499 26.1506 53.2499C34.8222 53.2504 39.7239 47.7209 39.7239 41.3369ZM63.8467 22.2823H75.5348V14.2269H42.7302V22.2823H54.4202V52.6073H63.8472L63.8467 22.2823ZM209.394 67.04H67.6054V84.2582H209.394V67.04ZM232.896 30.921H219.107V38.9211H224.548V41.8697C224.548 41.8697 221.262 44.6621 216.736 44.6621C210.759 44.6621 205.693 40.3173 205.693 33.015C205.693 27.325 208.979 22.1721 217.059 22.1721C222.499 22.1721 226.432 25.7172 226.432 25.7172L230.956 18.6862C230.956 18.6862 226.001 13.5839 216.143 13.5839C204.4 13.5839 195.945 22.1721 195.945 33.3368C195.945 45.8972 204.993 53.2503 214.85 53.2503C221.261 53.2503 224.978 49.9251 224.978 49.9251H225.084C225.084 49.9251 225.032 50.7288 225.032 51.5324V52.6069H232.896L232.896 30.921ZM216.097 292.668V284.816C216.097 282.423 214.151 280.483 211.749 280.483H65.2497C62.8488 280.483 60.9023 282.423 60.9023 284.816V292.668C60.9023 295.061 62.8488 297 65.2497 297H211.75C214.151 297 216.097 295.061 216.097 292.668ZM216.097 173.534V165.682C216.097 163.29 214.151 161.35 211.749 161.35H65.2497C62.8488 161.35 60.9023 163.29 60.9023 165.682V173.534C60.9023 175.927 62.8488 177.867 65.2497 177.867H211.75C214.151 177.867 216.097 175.927 216.097 173.534ZM216.097 203.318V195.465C216.097 193.073 214.151 191.133 211.749 191.133H65.2497C62.8488 191.133 60.9023 193.073 60.9023 195.465V203.318C60.9023 205.71 62.8488 207.65 65.2497 207.65H211.75C214.151 207.65 216.097 205.71 216.097 203.318ZM216.097 233.101V225.249C216.097 222.856 214.151 220.917 211.749 220.917H65.2497C62.8488 220.917 60.9023 222.856 60.9023 225.249V233.101C60.9023 235.494 62.8488 237.434 65.2497 237.434H211.75C214.151 237.434 216.097 235.494 216.097 233.101ZM216.097 262.884V255.032C216.097 252.639 214.151 250.7 211.749 250.7H65.2497C62.8488 250.7 60.9023 252.639 60.9023 255.032V262.884C60.9023 265.277 62.8488 267.217 65.2497 267.217H211.75C214.151 267.217 216.097 265.277 216.097 262.884Z'
                    fill='#4F46E5'
                  />
                </svg>
              </div>
              <div className='col-span-3'>
                <h2 className='text-3xl mb-4'>Digital storage</h2>
                <p>
                  All the storage have proper safety measure. Installed digital
                  devices to check with the storage to ensure proper temperature
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.6 }}
          >
            <div
              className={
                !arrange
                  ? `mt-4 lg:grid grid-cols-4 lg:w-3/5 mx-auto gap-8 bg-white p-8 -rotate-6 -skew-x-2 items-center transition-all`
                  : `mt-0 lg:grid grid-cols-4 lg:w-3/5 mx-auto gap-8 bg-white p-8 items-center transition-all`
              }
            >
              <div className=''>
                <svg
                  className='w-12 mx-auto h-fit lg:block hidden'
                  width='277'
                  height='253'
                  viewBox='0 0 277 253'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M161.519 19.6927H227.9L233.443 29.1114H167.077L161.519 19.6927ZM191.852 13.5996L184.319 0.263306H94.1887L101.722 13.5913H191.852V13.5996ZM148.73 48.9076L137.264 25.5356H0L11.4587 48.9076H148.73ZM277 182.321V222.647H253.391C250.701 239.692 236.887 252.728 220.227 252.728C203.575 252.728 189.746 239.692 187.071 222.647H111.447C108.757 239.692 94.9428 252.728 78.2833 252.728C61.6316 252.728 47.8096 239.692 45.1198 222.647H40.3311V161.499H124.841L113.375 138.153H40.3311V121.307L18.4864 121.207L11.0156 107.837L40.3311 107.979V61.277H187.864V84.6322H249.247L277 182.321ZM96.1477 216.637C96.1477 206.084 88.1717 197.524 78.3299 197.524C68.4959 197.524 60.5121 206.084 60.5121 216.637C60.5121 227.173 68.4959 235.749 78.3299 235.749C88.1639 235.749 96.1477 227.173 96.1477 216.637ZM238.076 216.637C238.076 206.084 230.077 197.524 220.25 197.524C210.424 197.524 202.425 206.084 202.425 216.637C202.425 227.173 210.424 235.749 220.25 235.749C230.077 235.749 238.076 227.173 238.076 216.637ZM261.165 184.846L237.563 101.636H203.739V185.221C208.613 182.271 214.257 180.545 220.227 180.545C235.231 180.545 247.941 191.131 252.294 205.668H261.165V184.846V184.846Z'
                    fill='#625AE6'
                  />
                </svg>
              </div>
              <div className='col-span-3'>
                <h2 className='text-3xl mb-4'>Shipping</h2>
                <p>
                  Shipping service is totally upto us. We ship your product to
                  the market destination without any extra cost. We have
                  partnered with onix cargo to handle shipping related service.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.8 }}
          >
            <div
              className={
                !arrange
                  ? `mt-4 lg:grid grid-cols-4 lg:w-3/5 mx-auto gap-8 bg-white p-8 rotate-6 skew-x-2 items-center transition-all`
                  : `mt-0 lg:grid grid-cols-4 lg:w-3/5 mx-auto gap-8 bg-white p-8 items-center transition-all`
              }
            >
              <div className=''>
                <svg
                  className='w-12 mx-auto h-fit lg:block hidden'
                  width='277'
                  height='297'
                  viewBox='0 0 277 297'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M264.546 266.855V37.0299C264.546 16.5601 252.245 2.32031 233.154 2.32031H228.861C228.861 0 227.893 0 226.696 0H196.365C176.079 0 156.343 15.2769 156.343 37.0299V146.479C149.716 145.962 146.141 146.18 139.084 146.18H29.9702C21.6191 146.18 11.3506 151.147 11.3506 160.102V175.622C22.1709 164.559 39.7712 157.811 56.402 157.811C92.2021 157.811 122.19 190.182 122.19 228.567C122.19 249.979 113.99 271.474 99.7612 283.076H211.604C219.955 283.076 223.429 273.505 223.429 264.55V237.855C223.429 202.389 206.116 171.457 177.983 155.454V37.0299C177.983 28.0735 188.014 23.2031 196.365 23.2031H226.696C227.893 23.2031 228.861 23.2031 228.861 20.8828H233.154C242.7 20.8828 247.233 26.7926 247.233 37.0299V266.855C242.905 270.282 236.413 277.356 236.413 285.535V292.468C236.413 293.752 236.413 297 236.413 297H275.366C275.366 297 275.366 293.752 275.366 292.468V285.535C275.366 277.356 271.038 270.279 264.546 266.855Z'
                    fill='#625AE6'
                  />
                  <path
                    d='M58.1353 190.393C39.0894 190.393 23.5947 207.007 23.5947 227.428C23.5947 247.849 39.0894 264.462 58.1353 264.462C77.1812 264.462 92.6759 247.849 92.6759 227.428C92.6759 207.007 77.1812 190.393 58.1353 190.393Z'
                    fill='#625AE6'
                  />
                  <path
                    d='M58.1353 166.842C26.9295 166.842 1.63379 193.966 1.63379 227.425C1.63379 260.884 26.9295 288.006 58.1353 288.006C89.3411 288.006 114.639 260.884 114.639 227.425C114.639 193.966 89.3411 166.842 58.1353 166.842ZM58.1353 273.743C34.3155 273.743 14.9384 252.965 14.9384 227.428C14.9384 201.888 34.3155 181.112 58.1353 181.112C81.9551 181.112 101.332 201.888 101.332 227.428C101.332 252.963 81.9551 273.743 58.1353 273.743Z'
                    fill='#625AE6'
                  />
                </svg>
              </div>
              <div className='col-span-3'>
                <h2 className='text-3xl mb-4'>Maintanance</h2>
                <p>
                  All the storage are maintained in a weather proof condition.
                  products get monitored 24hr. This monitored data is being used
                  for future upgradation in storage.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default About
