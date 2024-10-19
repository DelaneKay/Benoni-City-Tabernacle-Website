import React from 'react'
import SundaySchoolWelcome from './sections/SundaySchoolWelcome/SundaySchoolWelcome'
import SundaySchoolJunior from './sections/SundaySchoolJunior/SundaySchoolJunior'
import SundaySchoolLinks from './sections/SundaySchoolLinks/SundaySchoolLinks'
import SundaySchoolSenior from './sections/SundaySchoolSenior/SundaySchoolSenior'


const SundaySchool = () => {
  return (
    <>
      <SundaySchoolWelcome/>
      <SundaySchoolLinks/>
      <SundaySchoolJunior/>
      <SundaySchoolSenior/>
    </>
  )
}

export default SundaySchool
