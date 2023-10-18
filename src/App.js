import Bottom from './bottom/Bottom';
import Top from './top/Top';
import './app.css';

function App() {
  return (
    <div className="container">
      {/* <svg className='top-pattern' width="584" height="362" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="100%" y1="69.212%" x2="9.399%" y2="32.183%" id="a"><stop stop-color="#8A4389" stop-opacity="0" offset="0%"/><stop stop-color="#512051" offset="100%"/><stop stop-color="#512051" offset="100%"/><stop stop-color="#512051" offset="100%"/></linearGradient></defs><path d="M0 362c40.022-82.8 115.736-135.154 227.141-157.064 167.108-32.864 103.85-66.012 185.949-131.796C467.823 29.284 524.793 4.904 584 0v362H0z" transform="rotate(180 292 181)" fill="url(#a)" fill-rule="evenodd" opacity=".05"/></svg> */}
      <svg className='top-pattern-mobile' width="374" height="232" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="100%" y1="69.24%" x2="9.399%" y2="32.157%" id="a"><stop stop-color="#8A4389" stop-opacity="0" offset="0%"/><stop stop-color="#512051" offset="100%"/><stop stop-color="#512051" offset="100%"/><stop stop-color="#512051" offset="100%"/></linearGradient></defs><path d="M0 232c25.63-53.065 74.118-86.618 145.464-100.66 107.018-21.062 66.506-42.306 119.083-84.466C299.6 18.767 336.083 3.143 374 0v232H0z" transform="rotate(180 187 116)" fill="url(#a)" fill-rule="evenodd" opacity=".05"/></svg>
      <Top />
      <Bottom />
      {/* <svg className='bottom-pattern-mobile' width="375" height="503" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="100%" y1="69.237%" x2="9.399%" y2="32.159%" id="a"><stop stop-color="#8A4389" stop-opacity="0" offset="0%"/><stop stop-color="#512051" offset="100%"/><stop stop-color="#512051" offset="100%"/><stop stop-color="#512051" offset="100%"/></linearGradient></defs><path d="M-355 1530c74.356-153.934 215.022-251.268 422-292 310.466-61.099 192.94-122.724 345.47-245.025C514.157 911.442 620 866.116 730 857v673H-355z" transform="translate(0 -1027)" fill="url(#a)" fill-rule="evenodd" opacity=".05"/></svg> */}
      {/* <svg className='bottom-pattern' width="1085" height="673" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="100%" y1="69.237%" x2="9.399%" y2="32.159%" id="a"><stop stop-color="#8A4389" stop-opacity="0" offset="0%"/><stop stop-color="#512051" offset="100%"/><stop stop-color="#512051" offset="100%"/><stop stop-color="#512051" offset="100%"/></linearGradient></defs><path d="M355 800c74.356-153.934 215.022-251.268 422-292 310.466-61.099 192.94-122.724 345.47-245.025C1224.157 181.442 1330 136.116 1440 127v673H355z" transform="translate(-355 -127)" fill="url(#a)" fill-rule="evenodd" opacity=".05"/></svg> */}
    </div>
  )
}

export default App;