import { connectDevice, getDevice } from '../services/broadCastDeviceService';
import { useState, useEffect } from 'react';
import { HorizontalNavigation } from '../components/tailwind-ui';
import Details from '../components/BroadCastDevicesDetails/Details'

const DeviceDetails = ({ match }) => {

  const [currentPage, setCurrentPage] = useState(1);

  const [count,setCount] =useState(0);

  const [selected, setSelected] = useState({value:'Load', label:'Load'});

  const [data, setData] = useState([]);
  const [previousData, setPreviousData] = useState([]);

  const [deviceClient, setDeviceClient] = useState();
  const deviceId = `${match.params.id}`;

  useEffect(() => {
    if (deviceId) {
      getDevice(deviceId).then((deviceInfo) => {
        //console.log(deviceInfo);
        connectDevice(deviceInfo).then((deviceClient) =>
          setDeviceClient(deviceClient),
        );
      });
    }
  },[deviceId]);

  useEffect(() => {
    if (deviceClient) {
      //getAllDataCount
      deviceClient.getAllDataCount().then((result) => {
        //console.log(result);
        setCount(result);
      });
      deviceClient.subscribe(
        (message) => setData([message, ...data]),
        (error) => console.log(error),
      );
      //console.log(data);
      deviceClient.getPageData(currentPage * 10, 10).then((result) => {
        //console.log(result);
        setPreviousData(result);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deviceClient]);

  useEffect(() => {
    if (deviceClient) {
      deviceClient.getPageData(currentPage * 10, 10).then((result) => {
        console.log(result);
        setPreviousData(result);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <div class="m-4 p-2 shadow-lg " style={{backgroundColor:'white', borderRadius:'10px'}} >
      
      <HorizontalNavigation 
          onSelect={(option) => {
            setSelected(option);
            setCurrentPage(1);
          }}
          selected={selected}
          options={['Load', 'I/O','FS', 'Temperature'].map((value) => ({
            value: String(value),
            label: String(value)+' Details',
          }))}
      />

      <Details currentPage={currentPage} count={count} data={data} previousData={previousData} DetailType={selected.value} setCurrentPage={(p)=>setCurrentPage(p)}/>
    
    </div>
  );
};

export default DeviceDetails;
