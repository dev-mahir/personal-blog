import React from 'react'



const PostTable = () => {
  return (
    <div>
      <table className='w-full border-collapse'>
        <thead>
          <tr className='text-center'>
            <th>SL.</th>
            <th>Title</th>
            <th>Views</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>We are thinking about js</td>
            <td>015</td>
            <td>
              <div className='flex justify-center gap-x-10 '>
                <button className='btn p-0 text-green'> <i className='fs-20 bx bxs-edit'></i> </button>
                <button className='btn p-0 text-red'> <i class='fs-20 bx bx-trash' ></i> </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PostTable