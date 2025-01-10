import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import SelectElement from '../components/SelectElement';
import Link from 'next/link';

function Setting() {

  const USA = [
    {
      id: 1,
      option: 'USA'
    },
    {
      id: 2,
      option: 'Canada'
    },
    {
      id: 3,
      option: 'Others'
    }
  ]

  const Canada = [
    {
      id: 1,
      option: 'Canada'
    },
    {
      id: 2,
      option: 'USA'
    },
    {
      id: 3,
      option: 'Others'
    }
  ]

  const language = [
    {
      id: 1,
      option: 'English'
    },
    {
      id: 2,
      option: 'French'
    },
  ]


  const [odds, setOdds] = useState<string>("American");
  const [myTheme, setMyTheme] = useState<string>("Dark");
  const [pauseButton, setPauseButton] = useState<string>("Show");
  const [sportBook, setSportBook] = useState<string>("Disable");


  useEffect(() => {
    const storedOdds = localStorage.getItem("odds");
    const storedTheme = localStorage.getItem("Theme");
    const storedPauseButton = localStorage.getItem("pauseButton");
    const storedSportBook = localStorage.getItem("sportBook");

    storedOdds ? setOdds(JSON.parse(storedOdds)) : setOdds(odds)
    storedTheme ? setMyTheme(JSON.parse(storedTheme)) : setMyTheme(myTheme)
    storedPauseButton ? setPauseButton(JSON.parse(storedPauseButton)) : setPauseButton(pauseButton)
    storedSportBook ? setSportBook(JSON.parse(storedSportBook)) : setSportBook(sportBook)

  }, [])


  const handleChangeOdds = (odd: string) => {
    setOdds(odd);
    localStorage.setItem("odds", JSON.stringify(odd));
  }
  const handleChangeTheme = (theme: string) => {
    setMyTheme(theme);
    localStorage.setItem("Theme", JSON.stringify(theme));
  }
  const handleChangePauseButton = (button: string) => {
    setPauseButton(button);
    localStorage.setItem("pauseButton", JSON.stringify(button));
  }
  const handleChangeSportBook = (prop: string) => {
    setSportBook(prop);
    localStorage.setItem("sportBook", JSON.stringify(prop));
  }

  return (
    <div className='flex flex-col'>
      <div className='bg-[--dark-black] border border-[#929292] rounded-[8px] w-full p-[29px] space-y-3'>
        <div className='flex items-end justify-between'>
          <div>
            <h1 className='font-Jaro text-[30px] text-[--white]'>
              Sitewide sportbook selection
            </h1>
            <p className='text-[--gray-sm-text] text-sm'>
              Limit which books show up sitewide and set the order in which they appear.Learn more...
            </p>
          </div>

          <div className="bookmark w-[400px] pt-[7px] pb-[8px] ps-[14px] rounded-[4px] flex items-center gap-3 cursor-pointer">
            <img
              src="/images/bookmark-icon.png"
              alt="bookmark"
              className='w-[15px] h-[18px] filter'
            />
            <p className='text-sm'>
              Select/Order SportsBooks SiteWide
            </p>
          </div>
        </div>

        <div className='h-[1px] w-full bg-[#929292]'></div>

        <div className='flex items-start justify-between'>
          <div>
            <h1 className='font-Jaro text-[30px] text-[--white]'>
              Location
            </h1>
            <p className='text-[--gray-sm-text] text-sm'>
              Ensures quick links on bets take you to the correct sportsbook pages.Learn more...
            </p>
          </div>

          <div className='flex gap-3'>
            <SelectElement option={USA} />
            <SelectElement option={Canada} />
            <SelectElement option={language} />
          </div>
        </div>
      </div>

      <div className='bg-[--dark-black] border border-[#929292] rounded-[8px] w-full p-[29px] space-y-3 mt-10'>
        <div className='flex items-end justify-between'>
          <div>
            <h1 className='font-Jaro text-[30px] text-[--white]'>
              Display
            </h1>
          </div>
        </div>

        <div className='h-[1px] w-full bg-[#929292]'></div>

        <div className='flex items-center justify-between'>
          <div>
            <h1 className='text-sm text-[--dark-white]'>
              Odds
            </h1>
            <p className='text-[--gray-sm-text] text-sm'>
              Represented as +/- numbers like +125 or -3000
            </p>
          </div>

          <div className='flex space-x-3 items-center min-h-[35px] rounded-md border border-[#929292] w-[450px] p-1 ms-auto bg-[--gray-bg-bookmark]'>
            <Link
              href="#"
              className={`${odds === "American" ? "bg-[--dark-white] text-[--dark-black]" : "text-[--dark-white]"} rounded-md py-2 px-4 `}
              onClick={() => handleChangeOdds("American")}
            >
              American
            </Link>

            <Link
              href="#"
              className={`${odds === "Fractional" ? "bg-[--dark-white] text-[--dark-black]" : "text-[--dark-white]"} rounded-md py-2 px-4`}
              onClick={() => handleChangeOdds("Fractional")}
            >
              Fractional
            </Link>

            <Link
              href="#"
              className={`${odds === "Decimal" ? "bg-[--dark-white] text-[--dark-black]" : "text-[--dark-white]"} rounded-md py-2 px-4`}
              onClick={() => handleChangeOdds("Decimal")}
            >
              Decimal
            </Link>

            <Link
              href="#"
              className={`${odds === "Probability" ? "bg-[--dark-white] text-[--dark-black]" : "text-[--dark-white]"} rounded-md py-2 px-4`}
              onClick={() => handleChangeOdds("Probability")}
            >
              Probability
            </Link>
          </div>
        </div>

        <div className='h-[1px] w-full bg-[#929292]'></div>

        <div className='flex items-start justify-between'>
          <div>
            <h1 className='text-sm text-[--dark-white]'>
              Site Color Theme
            </h1>
          </div>

          <div className='grid grid-cols-2 space-x-3 items-center text-center min-h-[35px] rounded-md border border-[#929292] w-[450px] p-1 ms-auto bg-[--gray-bg-bookmark]'>
            <Link
              href="#"
              className={`${myTheme === "Light" ? "bg-[--dark-white] text-[--dark-black]" : "text-[--dark-white]"} rounded-md py-2 px-4 `}
              onClick={() => handleChangeTheme("Light")}
            >
              Light
            </Link>

            <Link
              href="#"
              className={`${myTheme === "Dark" ? "bg-[--dark-white] text-[--dark-black]" : "text-[--dark-white]"} rounded-md py-2 px-4`}
              onClick={() => handleChangeTheme("Dark")}
            >
              Dark
            </Link>
          </div>
        </div>

        <div className='h-[1px] w-full bg-[#929292]'></div>

        <div className='flex items-start justify-between'>
          <div>
            <h1 className='text-sm text-[--dark-white]'>
              Pause Button
            </h1>
            <p className='text-[--gray-sm-text] text-sm'>
              A toggle that allows you to freeze your current page results
            </p>
          </div>

          <div className='grid grid-cols-2 space-x-3 items-center text-center min-h-[35px] rounded-md border border-[#929292] w-[450px] p-1 ms-auto bg-[--gray-bg-bookmark]'>
            <Link
              href="#"
              className={`${pauseButton === "Show" ? "bg-[--dark-white] text-[--dark-black]" : "text-[--dark-white]"} rounded-md py-2 px-4 `}
              onClick={() => handleChangePauseButton("Show")}
            >
              Show
            </Link>
            <Link
              href="#"
              className={`${pauseButton === "Hide" ? "bg-[--dark-white] text-[--dark-black]" : "text-[--dark-white]"} rounded-md py-2 px-4 `}
              onClick={() => handleChangePauseButton("Hide")}
            >
              Hide
            </Link>
          </div>
        </div>
      </div>

      <div className='bg-[--dark-black] border border-[#929292] rounded-[8px] w-full p-[29px] space-y-3 mt-10'>

        <div className='flex items-center justify-between'>
          <div>
            <h1 className='font-Jaro text-[30px] text-[--dark-white]'>
              Sitewide sportbook selection
            </h1>
            <p className='text-[--gray-sm-text] text-sm'>
              Represented as +/- numbers like +125 or -3000
            </p>
          </div>

          <div className='grid grid-cols-2 space-x-3 items-center text-center min-h-[35px] rounded-md border border-[#929292] w-[450px] p-1 ms-auto bg-[--gray-bg-bookmark]'>
            <Link
              href="#" className={`${sportBook === "Enable" ? "bg-[--dark-white] text-[--dark-black]" : "text-[--dark-white]"} rounded-md py-2 px-4`}
              onClick={() => handleChangeSportBook("Enable")}
            >
              Enable
            </Link>

            <Link
              href="#" className={`${sportBook === "Disable" ? "bg-[--dark-white] text-[--dark-black]" : "text-[--dark-white]"} rounded-md py-2 px-4`}
              onClick={() => handleChangeSportBook("Disable")}
            >
              Disable
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting