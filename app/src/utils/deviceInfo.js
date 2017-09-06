'use strict';

import DeviceInfo from 'react-native-device-info';

/**
 * Device Unique ID
 * This is IDFV on iOS so it will change if all apps from the current apps vendor have been previously uninstalled.
 * FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9
 */
export function getUniqueID() {
	return DeviceInfo.getUniqueID();
}

/**
 * Device Manufacturer
 * Apple
 */
export function getManufacturer() {
	return DeviceInfo.getManufacturer();
}

/**
 * Device Brand
 * Apple / htc / Xiaomi
 */
export function getBrand() {
	return DeviceInfo.getBrand();
}

/**
 * Device Model
 * iPhone 6
 */
export function getModel() {
	return DeviceInfo.getModel();
}

/**
 * Device ID
 */
export function getDeviceId() {
	return DeviceInfo.getDeviceId();
}

export function getSystemName() {
	return DeviceInfo.getSystemName();
}

export function getSystemVersion() {
	return DeviceInfo.getSystemVersion();
}

export function getBundleId() {
	return developers.getBundleId();
}

export function getBuildNumber() {
	return developers.getBuildNumber();
}

export function getVersion() {
	return developers.getVersion();
}

export function getReadableVersion() {
	return developers.getReadableVersion();
}

export function getDeviceName() {
	return developers.getDeviceName();
}

export function getUserAgent() {
	return developers.getUserAgent();
}

export function getDeviceLocale() {
	return developers.getDeviceLocale();
}

Device Country	getDeviceCountry()	US	
Timezone	getTimezone()	America/Mexico_City	
App Instance ID	getInstanceID()		ANDROID ONLY - see https://developers.google.com/instance-id/
App is running in emulator	isEmulator()	true	if app is running in emulator return true
App is running on a tablet	isTablet()	true	if app is running on a tablet return true
PIN or fingerprint set	isPinOrFingerprintSet()(callback)		Only supported in Android and iOS 9.0 and above