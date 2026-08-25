const Students=(props)=>{
    const fullName = "Apoorva Sharma"
    return(
        <div className="container p-4 bg-success my-3 rounded">
            <div className="row border">
                <div className="col-2">
                IMAGE
                </div>
                <div className="col-8">
                    {props.name}
                    <br/>
                    Coding Experience {props.experience} years
                </div>
                <div className="col-2">{props.children}</div>
            </div>
        </div>
    )
}

export default Students;