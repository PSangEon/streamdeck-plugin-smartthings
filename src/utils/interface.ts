import { SelectElement } from './index'

export interface GlobalSettingsInterface {
  proxyServer: string
  accessToken: string
}
export interface CommonSettingsInterface {
  selectOptions?: SelectElement[]
}
export interface SceneSettingsInterface extends CommonSettingsInterface {
  sceneId: string
}

export interface DeviceSettingsInterface extends CommonSettingsInterface {
  deviceId: string
  behaviour: string
}