import React from 'react'
import SundaySchoolWelcome from './sections/SundaySchoolWelcome/SundaySchoolWelcome'
import SundaySchoolJunior from './sections/SundaySchoolJunior/SundaySchoolJunior'
import SundaySchoolLinks from './sections/SundaySchoolLinks/SundaySchoolLinks'
import SundaySchoolSenior from './sections/SundaySchoolSenior/SundaySchoolSenior'


const SundaySchool = () => {
  return (
    <>
      <SundaySchoolWelcome/>
      <section id='sunday-school'>
        <SundaySchoolLinks/>
        <SundaySchoolJunior/>
      </section>
      <SundaySchoolSenior/>
    </>
  )
}

export default SundaySchool
