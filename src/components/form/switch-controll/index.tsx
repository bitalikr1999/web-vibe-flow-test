import React, { FC } from 'react'
import { Switch } from 'antd'

import './style.css'

interface ISwitchControll {
  onPress: () => void
  isChecked?: boolean
  label?: string
  mb?: number
}

export const SwitchControll: FC<ISwitchControll> = ({ onPress, isChecked, label, mb = 12 }) => {
  return (
    <div onClick={onPress} className='switch-controll' style={{ marginBottom: mb }}>
      <p>{label}</p>
      <Switch checked={isChecked} onChange={onPress} />
    </div>
  )
}
