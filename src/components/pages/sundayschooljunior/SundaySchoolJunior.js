import React from 'react'
import JuniorVideoWelcome from './sections/JuniorVideoWelcome/JuniorVideoWelcome'
import JuniorVideoPresentations from './sections/JuniorVideoPresentations/JuniorVideoPresentations'
import JuniorVideoLinks from './sections/JuniorVideoLinks/JuniorVideoLinks'
import JuniorVideoLessons from './sections/JuniorVideoLessons/JuniorVideoLessons'

const SundaySchoolJunior = () => {
  return (
    <>
      <JuniorVideoWelcome/>
      <JuniorVideoLinks/>
      <JuniorVideoPresentations/>
      <JuniorVideoLessons/>
    </>
  )
}

export default SundaySchoolJunior
