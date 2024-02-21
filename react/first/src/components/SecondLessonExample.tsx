import Card from "./Card"

type Props = {}

const SecondLessonExample = (props: Props) => {
  return (
    // <div className='container'>
    //   <div className='row'>
    //     <div className='col-2 mx-2 bg-warning '>asdas</div>
    //     <div className='col-4 bg-danger'>asdas</div>
    //     <div className='col-2 bg-dark'>asdas</div>
    //     <div className='col-3 bg-primary'>asdas</div>
    //     <div className='col-3 bg-primary'>asdas</div>
    //     <div className='col-3 bg-primary'>asdas</div>
    //   </div>
    // </div>
    <div className=''>
      <div className='row justify-content-around min-vh-100'>
        <div className='col-2 bg-warning '>asdas</div>
        <div className='col-9 row justify-content-around '>
          {[1, 2, 34, 5, 67, 8, 90, 99, 22, 3123].map((cart) => (
            <div className='m-3 col-sm-8 col-md-3'>
              <Card />
            </div>
          ))}

          {/* <div className='col-2 bg-danger'></div>
        <div className='col-2 bg-primary'></div> */}
        </div>
      </div>
    </div>
  )
}

export default SecondLessonExample
