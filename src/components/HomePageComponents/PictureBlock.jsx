// import React, { Component, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { newsContext } from '../../contexts/NewsContext';

// class PictureBlock extends Component {
//   constructor(props) {
//     super(props);
//     // создадим реф в поле `textInput` для хранения DOM-элемента
//     this.blocks = React.createRef();
//     console.log(this.blocks)
//   }
//   render() {
//     return (
//       <>
//         <div className="col-sm-9 col-xs-12">
//           <div className="mainNews">
//             <div className="mainNewsOne">
//               {this.props.state ? (
//                 this.props.state.results.map((item) => (
//                   <div ref={this.blocks} key={item.id} className="one active">
//                     <Link to={`/news-detail${item.id}`} className="one-image">
//                       <img src={item.post_image[0].image} alt="img" />
//                     </Link>
//                     <div className="h2">
//                       <Link to={`/news-detail${item.id}`}><span>{item.title_post}</span></Link>
//                     </div>
//                   </div>
//                 ))
//               ) : (null)
//               }
//             </div>
//             <div className="mainNewsList">
//               {this.props.state ? (
//                 this.props.state.results.map((item) => (
//                   <div key={item.id} className="hidden-xs">
//                     <Link to={`/news-detail${item.id}`} className="active"><span>{item.title_post}</span></Link>
//                   </div>
//                 ))
//               ) : (null)
//               }
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default PictureBlock;