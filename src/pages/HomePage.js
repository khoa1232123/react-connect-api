import React, { Component } from 'react'
import ShowProductList from '../components/ShowProduct/ShowProductList'

export class HomePage extends Component {
  render() {
    return (
      <>
        <h1 className='align-center'>Trang chu</h1>
        <ShowProductList />
      </>
    )
  }
}

export default HomePage
