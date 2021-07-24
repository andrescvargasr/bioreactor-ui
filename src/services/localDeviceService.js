import legoinoDeviceInformation from 'legoino-device-information';
import DB from './db';

import { isFunction } from 'lodash';
import { DevicesManager } from 'legoino-navigator-serial';
import { DEVICE_TYPE } from './devicesOptions';
import { concatDeviceId } from './devicesService';

const SCAN_INTERVAL = 1000;

const devicesManager = new DevicesManager(navigator.serial);

/**
 * return device information to be stored in DB
 */
export const localDeviceInfo = ({ id, name }) => {
  const kind = getDeviceKind(id);
  return {
    _id: concatDeviceId(DEVICE_TYPE.local, kind?.kind, id),
    id: id,
    name: name ? name : `${kind?.kind}-${id}`,
    kind: kind,
  };
};

/**
 * Get device Kind from its ID
 */
export const getDeviceKind = (deviceId) => {
  try {
    if (deviceId) {
      const selectedDeviceType = legoinoDeviceInformation.fromDeviceID(
        Number(deviceId),
      );
      return selectedDeviceType;
    }
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

/**
 * By calling this method from a click you give users the possibility to allow access to some devices
 */
export const requestDevices = async () => {
  await devicesManager.requestDevices();
};

/**
 * @returns {Array<object>}
 */
export const getConnectedDevices = async () => {
  await devicesManager.updateDevices();
  const connectedDevices = await devicesManager.getDevicesList({
    ready: true, // If ready==`true` returns only currently connected device, else returns all devices ever connected.
  });
  return connectedDevices;
};

/**
 * Update updated devices list every `scanInterval` [ms].
 * @param {Function} callback(devicesList): Callback to execute on each update
 * @param {number} scanInterval Delay between calls
 */
export const continuousUpdateDevices = async (
  callback,
  scanInterval = SCAN_INTERVAL,
) => {
  const interval = setInterval(async () => {
    const connectedDevices = await getConnectedDevices();
    isFunction(callback) && callback(connectedDevices);
  }, scanInterval);
  return interval;
};

/**
 * Send a serial command to a device.
 * @param {number} id ID of the device
 * @param {string} command Command to send
 * @returns ??????
 */
export const sendCommand = async (deviceId, command) => {
  return await devicesManager.sendCommand(deviceId, command);
};

export const saveDataRow = (deviceId, data) => {
  const dbClient = DB(deviceId);
  return dbClient.put({ _id: Date.now().toString(), ...data });
};

export const getSavedData = (deviceId) => {
  const dbClient = DB(deviceId);
  return dbClient
    .getAll({
      descending: true,
    })
    .then((res) => res.rows.map((d) => d.doc));
};

export const getLastSavedData = (deviceId) => {
  const dbClient = DB(deviceId);
  return dbClient
    .getAll({
      descending: true,
      limit: 1,
    })
    .then((res) => res.rows.map((d) => d.doc));
};

export const clearSavedData = (deviceId) => {
  const dbClient = DB(deviceId);
  return dbClient.destroy();
};
