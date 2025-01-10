import React from 'react'

function Account() {
  return (
    <div className="rounded-[31px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
      <div className='bg-[--dark-black] border border-[#D9D9D9] rounded-[8px] w-full  pt-4 pb-5 px-5'>
        <div>
          <span className="uppercase text-[10px] font-bold py-0.5 px-2.5 rounded-[4px] bg-[--sine-gray] text-[--white]">free</span>
        </div>

        <div className="pt-5">
          <p className='ps-5'>
            <span className='text-2xl font-semibold text-[--dark-white]'>$0</span>
            <span className='text-[10px] text-[--gray]'>MONTH(USD)</span>
          </p>

          <div className='hr-line'></div>

          <button className="flex justify-center items-center capitalize h-[34px] w-full border border-[--gray] text-[--dark-white] font-semibold py-6 rounded-md">sign up</button>

          <div className='mt-3'>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Free Bet Converter
              </span>
            </div>

            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Pre-game and Live Data
              </span>
            </div>

            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Shareable multi-device filters and formulas
              </span>
            </div>

            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Trial: <span className='text-[--dark-white] font-semibold'>Indefinite</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <p className='text-[#DDDDDD] font-light uppercase'>
            Odds Screen
          </p>
          <div className='flex items-center gap-3'>
            <img
              src="/images/setting/dubble-tick.png"
              alt="dubble tick"
              className='h-[20px]'
            />
            <span className='text-[--gray]'>
              Refresh Time:  <span className='text-[--dark-white] font-semibold'>15 Seconds</span>
            </span>
          </div>
        </div>

        <div className="mt-3">
          <p className='text-[#DDDDDD] font-light uppercase'>
            Arbitrage
          </p>
          <div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                ROI Limit: <span className='text-[--dark-white] font-semibold'>2%</span>
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Max Results: <span className='text-[--dark-white] font-semibold'>10</span>
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Sportsbook Limit:<span className='text-[--dark-white] font-semibold'>None</span>
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Leagues Limit: <span className='text-[--dark-white] font-semibold'>None</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <p className='text-[#DDDDDD] font-light uppercase'>
            Positive EV
          </p>
          <div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                ROI Limit: <span className='text-[--dark-white] font-semibold'>2%</span>
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Max Results: <span className='text-[--dark-white] font-semibold'>10</span>
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Sportsbook Limit:<span className='text-[--dark-white] font-semibold'>None</span>
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Leagues Limit: <span className='text-[--dark-white] font-semibold'>None</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <p className='text-[#DDDDDD] font-light uppercase'>
            Middle
          </p>
          <div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                ROI Limit: <span className='text-[--dark-white] font-semibold'>2%</span>
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Max Results: <span className='text-[--dark-white] font-semibold'>10</span>
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Sportsbook Limit:<span className='text-[--dark-white] font-semibold'>None</span>
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Leagues Limit: <span className='text-[--dark-white] font-semibold'>None</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[--dark-black] border border-[#D9D9D9] rounded-[8px] w-full pt-4 pb-5 px-5'>
        <div>
          <span className="uppercase text-[10px] font-bold py-0.5 px-2.5 rounded-[4px] bg-[--sine-gray] text-[--white]">STARTER</span>
        </div>

        <div className="pt-5">
          <p className='ps-5'>
            <span className='text-2xl font-semibold text-[--dark-white]'>$30</span>
            <span className='text-[10px] text-[--gray]'>MONTH(USD)</span>
          </p>

          <div className='hr-line'></div>

          <button className="flex justify-center items-center capitalize h-[34px] w-full border border-[--gray] py-6 rounded-md font-semibold text-[--dark-white]">sign up</button>

          <div className='mt-3'>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Free Bet Converter
              </span>
            </div>

            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Pre-game and Live Data
              </span>
            </div>

            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Shareable multi-device filters and formulas
              </span>
            </div>

            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Trial: <span className='text-[--dark-white] font-semibold'>5 days</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <p className='text-[#DDDDDD] font-light uppercase'>
            Odds Screen
          </p>
          <div className='flex items-center gap-3'>
            <img
              src="/images/setting/dubble-tick.png"
              alt="dubble tick"
              className='h-[20px]'
            />
            <span className='text-[--gray]'>
              Refresh Time:  <span className='text-[--dark-white] font-semibold'>2-4 Seconds</span>
            </span>
          </div>
        </div>

        <div className="mt-3">
          <p className='text-[#DDDDDD] font-light uppercase'>
            Arbitrage
          </p>
          <div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                ROI Limit: <span className='text-[--dark-white] font-semibold'>None</span>
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Max Results: <span className='text-[--dark-white] font-semibold'>None</span>
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Sportsbook Limit:<span className='text-[--dark-white] font-semibold'>2</span>
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Leagues Limit: <span className='text-[--dark-white] font-semibold'>1</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <p className='text-[#DDDDDD] font-light uppercase'>
            Positive EV
          </p>
          <div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                ROI Limit: <span className='text-[--dark-white] font-semibold'>4%</span>
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Max Results: <span className='text-[--dark-white] font-semibold'>None</span>
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Sportsbook Limit:<span className='text-[--dark-white] font-semibold'>None</span>
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Leagues Limit: <span className='text-[--dark-white] font-semibold'>1</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[--dark-black] border border-[#D9D9D9] rounded-[8px] w-full pt-4 pb-5 px-5'>
        <div>
          <span className="uppercase text-[10px] font-bold py-0.5 px-2.5 rounded-[4px] bg-[--sine-gray] text-[--white]">INTERMEDIATE</span>
        </div>

        <div className="pt-5">
          <p className='ps-5'>
            <span className='text-2xl font-semibold text-[--dark-white]'>$80</span>
            <span className='text-[10px] text-[--gray]'>MONTH(USD)</span>
          </p>

          <div className='hr-line'></div>

          <button className="flex justify-center items-center capitalize h-[34px] w-full border border-[#CDCDCD] font-semibold py-6 rounded-md text-[--dark-white]">sign up</button>

          <div className='mt-3'>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Free Bet Converter
              </span>
            </div>

            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Pre-game and Live Data
              </span>
            </div>

            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Shareable multi-device filters and formulas
              </span>
            </div>

            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Trial: <span className='text-[--dark-white] font-semibold'>5 days</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <p className='text-[#DDDDDD] font-light uppercase'>
            Odds Screen
          </p>
          <div className='flex items-center gap-3'>
            <img
              src="/images/setting/dubble-tick.png"
              alt="dubble tick"
              className='h-[20px]'
            />
            <span className='text-[--gray]'>
              Refresh Time:  <span className='text-[--dark-white] font-semibold'>2-4 Seconds</span>
            </span>
          </div>
        </div>

        <div className="mt-3">
          <p className='text-[#DDDDDD] font-light uppercase'>
            Arbitrage
          </p>
          <div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                ROI Limit: <span className='text-[--dark-white] font-semibold'>None</span>
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Max Results: <span className='text-[--dark-white] font-semibold'>None</span>
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Sportsbook Limit:<span className='text-[--dark-white] font-semibold'>4</span>
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Leagues Limit: <span className='text-[--dark-white] font-semibold'>3</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <p className='text-[#DDDDDD] font-light uppercase'>
            Positive EV
          </p>
          <div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                ROI Limit: <span className='text-[--dark-white] font-semibold'>8%</span>
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Max Results: <span className='text-[--dark-white] font-semibold'>None</span>
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Sportsbook Limit:<span className='text-[--dark-white] font-semibold'>None</span>
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Leagues Limit: <span className='text-[--dark-white] font-semibold'>None</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[--dark-black] border border-[#D9D9D9] rounded-[8px] w-full pt-4 pb-5 px-5'>
        <div>
          <span className="uppercase text-[10px] font-bold py-0.5 px-2.5 rounded-[4px] bg-[--sine-gray] text-[--white]">ADVANCED</span>
        </div>

        <div className="pt-5">
          <p className='ps-5'>
            <span className='text-2xl font-semibold text-[--dark-white]'>$120</span>
            <span className='text-[10px] text-[--gray]'>MONTH(USD)</span>
          </p>

          <div className='hr-line'></div>

          <button className="flex justify-center items-center capitalize h-[34px] w-full border border-[#CDCDCD] font-semibold py-6 rounded-md text-[--dark-white]">sign up</button>

          <div className='mt-3'>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Free Bet Converter
              </span>
            </div>

            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Pre-game and Live Data
              </span>
            </div>

            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Shareable multi-device filters and formulas
              </span>
            </div>

            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Trial: <span className='text-[--dark-white] font-semibold'>None</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <p className='text-[#DDDDDD] font-light uppercase'>
            Odds Screen
          </p>
          <div className='flex items-center gap-3'>
            <img
              src="/images/setting/dubble-tick.png"
              alt="dubble tick"
              className='h-[20px]'
            />
            <span className='text-[--gray]'>
              Refresh Time:  <span className='text-[--dark-white] font-semibold'>None</span>
            </span>
          </div>
        </div>

        <div className="mt-3">
          <p className='text-[#DDDDDD] font-light uppercase'>
            Arbitrage
          </p>
          <div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                ROI Limit: <span className='text-[--dark-white] font-semibold'>None</span>
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Max Results: <span className='text-[--dark-white] font-semibold'>None</span>
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Sportsbook Limit:<span className='text-[--dark-white] font-semibold'>None</span>
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Leagues Limit: <span className='text-[--dark-white] font-semibold'>None</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <p className='text-[#DDDDDD] font-light uppercase'>
            Positive EV
          </p>
          <div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                ROI Limit: <span className='text-[--dark-white] font-semibold'>None</span>
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Max Results: <span className='text-[--dark-white] font-semibold'>None</span>
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Sportsbook Limit:<span className='text-[--dark-white] font-semibold'>None</span>
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img
                src="/images/setting/dubble-tick.png"
                alt="dubble tick"
                className='h-[20px]'
              />
              <span className='text-[--gray]'>
                Leagues Limit: <span className='text-[--dark-white] font-semibold'>None</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account