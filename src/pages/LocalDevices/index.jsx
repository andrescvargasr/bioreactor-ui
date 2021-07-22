import React, { useEffect, useState } from 'react';
import { Button } from '../../components/tailwind-ui';

import LocalDeviceModal from './LocalDeviceModal';
import LocalDevicesList from './LocalDevicesList';
import useNotification from '../../hooks/useNotification';
import { diffDeviceLists } from '../../services/util';
import { DEVICE_TYPE } from '../../services/devicesOptions';
import {
  addDevice2,
  updateDevice,
  getDevices,
  deleteDevice,
} from '../../services/devicesService';
import {
  localDeviceInfo,
  requestDevices,
  getConnectedDevices,
  continuousUpdateDevices,
} from '../../services/localDeviceService';

const REFRESH_INTERVAL = 1000;

const LocalDevices = ({ history, match }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [devices, setDevices] = useState([]);
  const [deviceEdited, setDeviceEdited] = useState({});
  const { addInfoNotification } = useNotification();

  useEffect(() => refreshDevices(), []);

  // update devices status continuously
  useEffect(() => {
    const cleanUp = continuousUpdateDevices((connected) => {
      let changed;
      const ids = connected.map((d) => d.id);
      const _devices = devices.map((d) => {
        if (ids.includes(d.id) && !d.connected) {
          d.connected = true;
          changed = true;
        } else if (!ids.includes(d.id) && d.connected) {
          d.connected = false;
          changed = true;
        }
        return d;
      });
      if (changed) setDevices(_devices);
      console.log(_devices);
    }, REFRESH_INTERVAL);

    return () => cleanUp.then((intervalId) => clearInterval(intervalId));
  }, [devices]);

  const refreshDevices = () => {
    getDevices(DEVICE_TYPE.local).then(setDevices);
  };

  const onRequest = async () => {
    document.activeElement.blur();
    await requestDevices();
    const newList = await getConnectedDevices();
    handleDevicesListChange(newList);
  };

  const handleDevicesListChange = (_devices) => {
    getDevices(DEVICE_TYPE.local).then((storedDevices) => {
      const newDevices = diffDeviceLists(_devices, storedDevices);
      if (newDevices.length > 0) {
        addInfoNotification('New device connected');
        newDevices.forEach((_device) => {
          addDevice2(localDeviceInfo(_device));
        });
        refreshDevices();
      }
    });
  };

  const onEditDevice = async (device, e) => {
    e.stopPropagation();
    setDeviceEdited(device);
    setIsModalOpen(true);
  };

  const onDeleteDevice = async (device, e) => {
    e.stopPropagation();
    deleteDevice(device._id).then(() => refreshDevices());
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
    setDeviceEdited({});
  };

  const onSaveDevice = async (device) => {
    updateDevice(device).then(() => {
      setDeviceEdited({});
      setIsModalOpen(false);
      refreshDevices();
    });
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-10">Local devices</h2>
      <div className="w-full flex justify-end mb-4">
        <Button onClick={onRequest}>Request Device</Button>
      </div>
      <div>
        <div className="w-full my-2 flex flex-row items-center ">
          <h3 className="w-max ml-2 mr-4 text-neutral-600 text-sm whitespace-nowrap ">
            Available devices
          </h3>
          <div className="w-full border-t border-neutral-300" />
        </div>
        <LocalDevicesList
          data={devices}
          //   onSelect={onSelectItem}
          onEdit={onEditDevice}
          onDelete={onDeleteDevice}
        />
      </div>

      <LocalDeviceModal
        isOpen={isModalOpen}
        onClose={onCloseModal}
        initialValues={deviceEdited}
        onSave={onSaveDevice}
      />
    </div>
  );
};

export default LocalDevices;
