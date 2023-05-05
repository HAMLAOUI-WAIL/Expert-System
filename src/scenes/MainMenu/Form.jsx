import React from 'react'
import intelligence from '../images/icons8-artificial-intelligence-100 (1) 1.png'
import table from '../images/line-icon-board-game-table-game-element-fun-activity-vector-illustration-tictactoe_721440-1914-removebg 3.png'
import personne from '../images/image 5.png'
import { Link } from 'react-router-dom'

export default function Form() {
  return (
    <div className='flex h-screen'>
        
        <div className='bg-gray-200 p-10 w-[70%]'>
            <h1 className='text-5xl'>Welcome To the 3rd year AI project</h1>
            <div className='p-6'>
                <p>This is a project that has two main parts :</p>
                <ul className='list-disc ml-7'>
                    <li>Expert System application : spadkpaskd aspdk posakdo asd sakdpaskdp kasdksadpk sad</li>
                    <li>Game Search AI : posakd sadopk sapdok sapdkaspkdpsakdpsakd[paskd[psakd</li>
                </ul>
            </div>
            <div className='flex justify-between'>
                
                    <div className='bg-[#E46267] max-w-[40%] text-center py-4 border-white border-4 shadow-xl px-3'
                    style={{border:"4px solid #F8F8F8" , boxShadow:"4px 5px 20px rgba(0, 0, 0, 0.25), -4px -4px 4px rgba(0, 0, 0, 0.25)",borderRadius:"5px"}}>
                        <Link to={"/Main"}>
                            <img src={intelligence} alt="image1" className="w-48 h-48 m-auto" />
                            <h1 className='text-2xl text-white'>Expert System App</h1>
                            <p className='text-sm text-justify text-slate-200'>explaining a little bit explaining a little bit explaining 
                                a little bit explaining a little bit explaining a little bit 
                                explaining a little bit explaining a little bit explaining a 
                                little bit 
                            </p>
                         </Link>
                        
                    </div>
                
                <div className='border-gray-600 rounded-md max-w-[40%] text-center py-4 border-4 px-3' style={{border:'4px solid rgba(0, 0, 0, 0.6)',background:"rgba(248, 248, 248, 0.5)",borderRadius:"10px"}}>
                    <Link to={"/Game"}>
                        <img src={table} alt="image2" className='w-48 h-48 m-auto' />
                        <h1 className='text-2xl'>Tic Tac Toe AI agent</h1>
                        <p className='text-sm text-justify'>explaining a little bit explaining a little bit explaining 
                            a little bit explaining a little bit explaining a little bit 
                            explaining a little bit explaining a little bit explaining a 
                            little bit 
                        </p>
                    </Link>
                </div>
            </div>
        </div>

        <div className='p-12 w-screen' style={{backgroundColor:"white"}}>
            <h1 className='text-3xl font-semibold'>Contributors</h1>
            <div className='mt-10 flex'>
                <img src={personne} alt='image2' className='w-12' />
                <div className='ml-3'>
                    <h1 className='font-semibold'>Souda Achref</h1>
                    <p className='text-xs'>Git, Linkedin, Instagram</p>
                </div>
            </div>
            <div className='mt-5 flex'>
                <img src={personne} alt='image2' className='w-12' />
                <div className='ml-3'>
                    <h1 className='font-semibold'>Ferrouk Massinissa</h1>
                    <p className='text-xs'>Git, Linkedin, Instagram</p>
                </div>
            </div>
            <div className='mt-5 flex'>
                <img src={personne} alt='image2' className='w-12' />
                <div className='ml-3'>
                    <h1 className='font-semibold'>Hamlaoui Wail</h1>
                    <p className='text-xs'>Git, Linkedin, Instagram</p>
                </div>
            </div>
        </div>
    </div>
  )
}
