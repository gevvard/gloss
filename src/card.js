import randomcolor from "randomcolor";
import React, {Fragment, useState} from "react";
import css from "./styles.css"

const Card = ({data,employeeData}) => {
  const levelColor = randomcolor();
  const [ employees,setEmployees] = useState(data)
  console.log("employeeData",employeeData)


  return (
    <div>

        {/*{*/}
        {/*  employeeData?.map(({ID,WORK_POSITION,LAST_NAME,NAME,UF_DEPARTMENT,PERSONAL_PHOTO})=>{*/}

        {/*    return <>*/}
        {/*      <Fragment key={ID}>*/}
        {/*        <img src={PERSONAL_PHOTO} alt=""/>*/}
        {/*        <p>{NAME}</p>*/}
        {/*        <p>{WORK_POSITION}</p>*/}
        {/*        {console.log("PERSONAL_PHOTO",PERSONAL_PHOTO)}*/}
        {/*        /!*<li>*!/*/}
        {/*        /!*  *!/*/}
        {/*        /!*  <div className="card">*!/*/}

        {/*        /!*    /!* </div> *!/*!/*/}
        {/*        /!*    <div className="card-body">*!/*/}
        {/*        /!*      <p><h4>{WORK_POSITION}</h4>*!/*/}
        {/*        /!*      <h4>{LAST_NAME}{NAME}</h4></p>*!/*/}
        {/*        /!*    </div>*!/*/}
        {/*        /!*    {WORK_POSITION === 'VM' ?*!/*/}
        {/*        /!*      <li className="extraordinary">*!/*/}
        {/*        /!*        <div className="card">*!/*/}
        {/*        /!*          <p><h4>{WORK_POSITION}</h4>*!/*/}
        {/*        /!*          </p>*!/*/}

        {/*        /!*        </div>*!/*/}
        {/*        /!*      </li>*!/*/}
        {/*        /!*      : null*!/*/}
        {/*        /!*    }*!/*/}
        {/*        /!*    {WORK_POSITION.name === 'Stock-keeper' ?*!/*/}
        {/*        /!*      <li className="extraordinary-2">*!/*/}
        {/*        /!*        /!*  <div className="card">*!/*!/*/}
        {/*        /!*        /!*    <p><h4></h4></p>*!/*!/*/}
        {/*        /!*        /!*</div>*!/*!/*/}
        {/*        /!*      </li>*!/*/}
        {/*        /!*      : null*!/*/}
        {/*        /!*    }*!/*/}
        {/*        /!*  </div>*!/*/}
        {/*        /!*  /!*{item.children?.length && <Card data={item.children} />}*!/*!/*/}
        {/*        /!*</li>*!/*/}
        {/*      </Fragment>*/}
        {/*    </>*/}
        {/*  })*/}
        {/*}*/}

      <ul>
        {data?.map((item,index) => (

          <Fragment key={item.name}>
            <li>
              {
                console.log(item.users)
              }
              <div className="card">

                {/* </div> */}
                <div className="card-body">
                  <p><h4>{item?.name}</h4></p>

                </div>
                <div style={{display:"flex" }} >
                  {item?.users?.map(({id, url,name,position})=>{
                    return <div id={id}  style={{margin:5,}} >
                      {/*<p>{position}</p>*/}
                      <img src={url}  style={{width:40,height:40,borderRadius:20}} alt=""/>
                      <p>{name}</p>
                    </div>
                  })}
                </div>
                {item.name === 'Stock-keeper' ?
                  <li className="extraordinary-2">
                    {/*  <div className="card">*/}
                    {/*    <p><h4></h4></p>*/}
                    {/*</div>*/}
                  </li>
                  : null
                }
              </div>
              {item.children?.length && <Card data={item.children} />}
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};
export default  Card