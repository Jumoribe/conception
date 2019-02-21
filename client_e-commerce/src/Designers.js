import React from 'react';

export default class Designers extends React.Component{
    state ={
     designersList:[]
    }
    // componentDidMount(){
    //     this.findCategories();
    //   }
    handleMenu =(arg)=>{
        console.log('>>>>>>>>>>>>>>>>>>>>>=======>',this.props)
        this.props.findProductsByDesigners(arg);
    }
    render(){

        return(
            <div style={{display:this.props.display, width:'90%'}}>
                <div>
                {
                this.state.designersList.map(ele=>{
                    return(  
                    <p onClick={()=>this.handleMenu(ele._id)} className='sidebarItem' style={decor.item}>{ele.category}</p>
                    )
                })
                }
                </div>
            </div>
        )
    }
}

const decor={
    main:{
        width: '100%'
    },
    title:{
        borderBottom: '2px solid rgb(42, 43, 45)',
        fontSize: '20px',
        textAlign: 'right',
        textTransform: 'uppercase',
        margin: '1em auto',
        paddingTop: '1em'
    
    },
    item:{
        borderBottom:'1px solid rgb(242, 242, 242)',
        textAlign: 'right',
        textTransform: 'uppercase', 
        margin: '2em auto', 
        paddingBottom: '0.4em',
        textDecoration: 'none'
    },
    icon:{
        fontSize: '15px',
         color: 'grey',
         paddingRight: '40%'
    }
}