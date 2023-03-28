import React, { useState } from 'react'
import { Multiselect } from 'multiselect-react-dropdown'
import { CCard, CCardBody, CCol, CCardHeader, CRow, CFormSelect } from '@coreui/react'
import { CChartBar, CChartLine, CChartScatter } from '@coreui/react-chartjs'
import { format } from 'react-string-format'

const Charts = () => {
  const random = () => Math.round(Math.random() * 100)
  const colorList = [
    '#5c4286',
    '#610a1e',
    '#51e1b8',
    '#d77542',
    '#547090',
    '#79a54d',
    '#f844e9',
    '#cbecb7',
    '#7f8feb',
    '#15b19b',
    '#e3c47c',
    '#5efb18',
    '#e6d6b5',
    '#9b8446',
    '#9b5384',
    '#509192',
    '#aab8aa',
    '#79d30e',
  ]
  const [userChoice, setUserChoice] = useState(
    'Size of Largest Metastatic Deposit in Millimeters (mm)',
  )
  const [userChoiceStack, setUserChoiceStack] = useState(
    'Size of Largest Metastatic Deposit in Millimeters (mm)',
  )
  const [userChoiceScatter1, setUserChoiceScatter1] = useState(
    'Size of Largest Metastatic Deposit in Millimeters (mm)',
  )
  const [userChoiceScatter2, setUserChoiceScatter2] = useState(
    'Size of Largest Metastatic Deposit in Millimeters (mm)',
  )
  const [XLabel, setXLabel] = useState(['not determined', '0-5', '5-10', '10-15'])
  const [XValue, setXValue] = useState([34, 16, 24, 26])
  const [StackedValue, setStackedValue] = useState([
    {
      label: '0-5',
      backgroundColor: '#679289',
      data: [2, 4, 1, 1, 2, 3, 3, 3, 3, 2],
    },
    {
      label: '5-10',
      backgroundColor: '#f4c095',
      data: [4, 6, 2, 2, 2, 2, 2, 0, 3, 0],
    },
    {
      label: '10-15',
      backgroundColor: '#ee2e31',
      data: [3, 3, 1, 2, 0, 3, 1, 6, 6, 2],
    },
  ])
  let [LineValue, setLineValue] = useState([
    {
      label: 'Select Above',
      backgroundColor: '#ca2a0b',
      borderColor: '#ca2a0b',
      pointBackgroundColor: '#ca2a0b',
      pointBorderColor: '#fff',
      data: [],
    },
  ])
  const [ScatterVal, setScatterVal] = useState([{}])
  const handlerStacked = (chioceStack) => {
    setUserChoiceStack(chioceStack.target.value)
    if (chioceStack.target.value === 'Extranodal Extension') {
      setStackedValue([
        {
          label: 'not determined',
          backgroundColor: '#1d7874',
          data: [6, 3, 3, 4, 7, 3, 6, 2, 7, 0],
        },
        {
          label: 'not identified',
          backgroundColor: '#679289',
          data: [3, 2, 3, 3, 5, 4, 3, 3, 5, 0],
        },
        {
          label: 'present',
          backgroundColor: '#f4c095',
          data: [4, 2, 5, 2, 3, 4, 2, 4, 2, 0],
        },
      ])
    }
    if (chioceStack.target.value === 'Matted Nodes') {
      setStackedValue([
        {
          label: 'not identified',
          backgroundColor: '#679289',
          data: [3, 4, 3, 7, 3, 5, 5, 3, 6, 0],
        },
        {
          label: 'present',
          backgroundColor: '#f4c095',
          data: [10, 3, 8, 2, 12, 6, 6, 6, 8, 0],
        },
      ])
    }
    if (chioceStack.target.value === 'Number of Sentinel Nodes Examined') {
      setStackedValue([
        {
          label: 'not applicable',
          backgroundColor: '#f4c095',
          data: [13, 7, 11, 9, 15, 11, 11, 9, 14, 0],
        },
      ])
    }
    if (chioceStack.target.value === 'Pathologic Stage Classification') {
      setStackedValue([
        {
          label: 'included',
          backgroundColor: '#f4c095',
          data: [13, 7, 11, 9, 15, 11, 11, 9, 14, 0],
        },
      ])
    }
    if (chioceStack.target.value === 'TNM Descriptors') {
      setStackedValue([
        {
          label: 'not applicable',
          backgroundColor: '#1d7874',
          data: [3, 0, 2, 2, 4, 3, 2, 1, 2, 0],
        },
        {
          label: 'm',
          backgroundColor: '#679289',
          data: [5, 1, 3, 1, 5, 3, 4, 5, 3, 0],
        },
        {
          label: 'r',
          backgroundColor: '#f4c095',
          data: [1, 1, 3, 3, 2, 2, 4, 0, 5, 0],
        },
        {
          label: 'y',
          backgroundColor: '#ee2e31',
          data: [4, 5, 3, 3, 4, 3, 1, 3, 4, 0],
        },
      ])
    }
    if (chioceStack.target.value === 'Primary Tumor (pT)') {
      setStackedValue([
        {
          label: 'pT0',
          backgroundColor: '#19e2ee',
          data: [1, 0, 0, 1, 0, 1, 0, 0, 0, 0],
        },
        {
          label: 'pT1',
          backgroundColor: '#3c2124',
          data: [0, 0, 0, 1, 2, 1, 1, 0, 0, 0],
        },
        {
          label: 'pT1a',
          backgroundColor: '#dfe3dc',
          data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
        },
        {
          label: 'pT1b',
          backgroundColor: '#9ce1ef',
          data: [0, 2, 1, 1, 1, 0, 0, 1, 1, 0],
        },
        {
          label: 'pT2',
          backgroundColor: '#da965c',
          data: [2, 1, 3, 2, 2, 1, 0, 0, 3, 0],
        },
        {
          label: 'pT2a',
          backgroundColor: '#763228',
          data: [1, 1, 0, 0, 3, 0, 0, 1, 3, 0],
        },
        {
          label: 'pT2b',
          backgroundColor: '#a34e3c',
          data: [1, 0, 2, 0, 1, 1, 2, 0, 2, 0],
        },
        {
          label: 'pT3',
          backgroundColor: '#74a3aa',
          data: [0, 0, 0, 1, 3, 0, 2, 0, 0, 0],
        },
        {
          label: 'pT3a',
          backgroundColor: '#d67e2c',
          data: [2, 0, 0, 0, 0, 3, 2, 2, 0, 0],
        },
        {
          label: 'pT3b',
          backgroundColor: '#bcbc8c',
          data: [2, 1, 2, 1, 0, 1, 0, 2, 1, 0],
        },
        {
          label: 'pT4',
          backgroundColor: '#687779',
          data: [1, 0, 0, 1, 1, 1, 2, 0, 0, 0],
        },
        {
          label: 'pT4a',
          backgroundColor: '#f18a81',
          data: [1, 0, 1, 1, 0, 0, 1, 0, 0, 0],
        },
        {
          label: 'pT4b',
          backgroundColor: '#535b64',
          data: [1, 0, 0, 0, 0, 1, 0, 1, 0, 0],
        },
        {
          label: 'pTX',
          backgroundColor: '#d8372d',
          data: [0, 1, 1, 0, 1, 1, 1, 1, 3, 0],
        },
      ])
    }
    if (chioceStack.target.value === 'Regional Lymph Nodes (pN)') {
      setStackedValue([
        {
          label: 'pT0',
          backgroundColor: '#679289',
          data: [1, 0, 0, 1, 0, 1, 0, 0, 0, 0],
        },
        {
          label: 'pT1',
          backgroundColor: '#19e2ee',
          data: [0, 0, 0, 1, 2, 1, 1, 0, 0, 0],
        },
        {
          label: 'pT1a',
          backgroundColor: '#3c2124',
          data: [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
        },
        {
          label: 'pT1b',
          backgroundColor: '#9ce1ef',
          data: [0, 2, 1, 1, 1, 0, 0, 1, 1, 0],
        },
        {
          label: 'pT2',
          backgroundColor: '#da965c',
          data: [2, 1, 3, 2, 2, 1, 0, 0, 3, 0],
        },
        {
          label: 'pT2a',
          backgroundColor: '#763228',
          data: [1, 1, 0, 0, 3, 0, 0, 1, 3, 0],
        },
        {
          label: 'pT2b',
          backgroundColor: '#679289',
          data: [1, 0, 2, 0, 1, 1, 2, 0, 2, 0],
        },
        {
          label: 'pT3',
          backgroundColor: '#a34e3c',
          data: [0, 0, 0, 1, 3, 0, 2, 0, 0, 0],
        },
        {
          label: 'pT3a',
          backgroundColor: '#74a3aa',
          data: [2, 0, 0, 0, 0, 3, 2, 2, 0, 0],
        },
        {
          label: 'pT3b',
          backgroundColor: '#d67e2c',
          data: [2, 1, 2, 1, 0, 1, 0, 2, 1, 0],
        },
        {
          label: 'pTX',
          backgroundColor: '#bcbc8c',
          data: [0, 1, 1, 0, 1, 1, 1, 1, 3, 0],
        },
      ])
    }
    if (chioceStack.target.value === 'Distant Metastasis (pM)') {
      setStackedValue([
        {
          label: 'pM1a',
          backgroundColor: '#1d7874',
          data: [4, 1, 0, 3, 4, 4, 2, 3, 4, 0],
        },
        {
          label: 'pM1b',
          backgroundColor: '#679289',
          data: [3, 2, 3, 2, 3, 3, 3, 3, 2, 0],
        },
        {
          label: 'pM1c',
          backgroundColor: '#f4c095',
          data: [2, 1, 3, 2, 2, 2, 4, 2, 3, 0],
        },
        {
          label: 'pM1d',
          backgroundColor: '#ee2e31',
          data: [4, 3, 5, 2, 6, 2, 2, 1, 5, 0],
        },
      ])
    }
    if (chioceStack.target.value === 'Status of Melanoma In Situ at Peripheral Margins') {
      setStackedValue([
        {
          label: 'Cannot be assessed',
          backgroundColor: '#1d7874',
          data: [2, 3, 2, 2, 4, 3, 3, 1, 1, 0],
        },
        {
          label: 'Involved by melanoma in situ',
          backgroundColor: '#679289',
          data: [4, 2, 4, 3, 3, 4, 2, 3, 5, 0],
        },
        {
          label: 'Not applicable',
          backgroundColor: '#f4c095',
          data: [4, 2, 2, 2, 5, 2, 2, 3, 5, 0],
        },
        {
          label: 'Uninvolved by melanoma in situ',
          backgroundColor: '#ee2e31',
          data: [3, 0, 3, 2, 3, 2, 4, 2, 3, 0],
        },
      ])
    }
    if (chioceStack.target.value === 'Size of Largest Metastatic Deposit in Millimeters (mm)') {
      setStackedValue([
        {
          label: '0-5',
          backgroundColor: '#1d7874',
          data: [3, 1, 1, 3, 3, 3, 2, 3, 5, 0],
        },
        {
          label: '5-10',
          backgroundColor: '#679289',
          data: [3, 1, 4, 3, 2, 2, 3, 2, 3, 0],
        },
        {
          label: '10-15',
          backgroundColor: '#f4c095',
          data: [5, 3, 5, 0, 5, 0, 5, 0, 2, 0],
        },
        {
          label: 'not determined',
          backgroundColor: '#ee2e31',
          data: [2, 2, 1, 3, 5, 6, 1, 4, 4, 0],
        },
      ])
    }
    if (
      chioceStack.target.value ===
      'Distance of Melanoma in situ from Closest Peripheral Margin in Millimeters (mm)'
    ) {
      setStackedValue([
        {
          label: '0-5',
          backgroundColor: '#1d7874',
          data: [5, 2, 5, 3, 1, 3, 2, 1, 2, 0],
        },
        {
          label: '5-10',
          backgroundColor: '#679289',
          data: [3, 1, 2, 3, 1, 2, 1, 4, 6, 0],
        },
        {
          label: '10-15',
          backgroundColor: '#f4c095',
          data: [1, 2, 1, 2, 4, 2, 2, 1, 3, 0],
        },
        {
          label: 'not determined',
          backgroundColor: '#ee2e31',
          data: [4, 2, 3, 1, 9, 4, 6, 3, 3, 0],
        },
      ])
    }
    if (
      chioceStack.target.value ===
      'Distance of Melanoma in situ from Deep Margin in Millimeters (mm)'
    ) {
      setStackedValue([
        {
          label: '0-5',
          backgroundColor: '#1d7874',
          data: [1, 2, 1, 0, 2, 4, 3, 2, 4, 0],
        },
        {
          label: '5-10',
          backgroundColor: '#679289',
          data: [4, 0, 2, 1, 1, 1, 2, 4, 2, 0],
        },
        {
          label: '10-15',
          backgroundColor: '#f4c095',
          data: [4, 2, 2, 2, 6, 4, 3, 2, 5, 0],
        },
        {
          label: 'not determined',
          backgroundColor: '#ee2e31',
          data: [4, 3, 6, 6, 6, 2, 3, 1, 3, 0],
        },
      ])
    }
    if (
      chioceStack.target.value ===
      'Distance of Invasive Melanoma from Closest Peripheral Margin in Millimeters (mm)'
    ) {
      setStackedValue([
        {
          label: '0-5',
          backgroundColor: '#1d7874',
          data: [3, 3, 3, 2, 1, 1, 2, 3, 3, 0],
        },
        {
          label: '5-10',
          backgroundColor: '#679289',
          data: [0, 1, 2, 3, 5, 2, 2, 1, 1, 0],
        },
        {
          label: '10-15',
          backgroundColor: '#f4c095',
          data: [3, 3, 3, 3, 2, 4, 3, 3, 3, 0],
        },
        {
          label: 'not determined',
          backgroundColor: '#ee2e31',
          data: [7, 0, 3, 1, 7, 4, 4, 2, 7, 0],
        },
      ])
    }
    if (
      chioceStack.target.value ===
      'Distance of Invasive Melanoma from Deep Margin in Millimeters (mm)'
    ) {
      setStackedValue([
        {
          label: '0-5',
          backgroundColor: '#1d7874',
          data: [2, 0, 2, 2, 3, 6, 3, 0, 5, 0],
        },
        {
          label: '5-10',
          backgroundColor: '#679289',
          data: [4, 2, 1, 1, 4, 2, 1, 2, 1, 0],
        },
        {
          label: '10-15',
          backgroundColor: '#f4c095',
          data: [4, 3, 5, 3, 4, 1, 3, 4, 3, 0],
        },
        {
          label: 'not determined',
          backgroundColor: '#ee2e31',
          data: [3, 2, 3, 3, 4, 2, 4, 3, 5, 0],
        },
      ])
    }
    if (chioceStack.target.value === 'Number of Lymph Nodes with Tumor') {
      setStackedValue([
        {
          label: '0-5',
          backgroundColor: '#1d7874',
          data: [7, 3, 4, 3, 2, 2, 2, 4, 2, 0],
        },
        {
          label: '5-10',
          backgroundColor: '#679289',
          data: [2, 2, 5, 2, 5, 7, 6, 1, 4, 0],
        },
        {
          label: '10-15',
          backgroundColor: '#f4c095',
          data: [4, 2, 2, 4, 8, 2, 3, 4, 8, 0],
        },
        {
          label: 'not determined',
          backgroundColor: '#ee2e31',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
      ])
    }
    if (chioceStack.target.value === 'Tumor Size') {
      setStackedValue([
        {
          label: '0-5',
          backgroundColor: '#1d7874',
          data: [0, 0, 0, 5, 1, 1, 3, 0, 3, 0],
        },
        {
          label: '5-10',
          backgroundColor: '#679289',
          data: [1, 3, 4, 0, 4, 2, 1, 1, 2, 0],
        },
        {
          label: '10-15',
          backgroundColor: '#f4c095',
          data: [4, 2, 2, 0, 5, 1, 1, 4, 1, 0],
        },
        {
          label: 'not determined',
          backgroundColor: '#ee2e31',
          data: [8, 2, 5, 4, 5, 7, 6, 4, 8, 0],
        },
      ])
    }
    // console.log(chioceStack.target.id)
  }
  const handler = (select) => {
    setUserChoice(select.target.value)
    if (select.target.value === 'Extranodal Extension') {
      setXLabel(['not determined', 'not identified', 'present'])
      setXValue([41, 31, 28])
    }
    if (select.target.value === 'Matted Nodes') {
      setXLabel(['not identified', 'present'])
      setXValue([39, 61])
    }
    if (select.target.value === 'Number of Sentinel Nodes Examined') {
      setXLabel(['not applicable'])
      setXValue([100])
    }
    if (select.target.value === 'Pathologic Stage Classification') {
      setXLabel(['included'])
      setXValue([100])
    }
    if (select.target.value === 'TNM Descriptors') {
      setXLabel(['not applicable', 'm', 'r', 'y'])
      setXValue([19, 30, 21, 30])
    }
    if (select.target.value === 'Primary Tumor (pT)') {
      setXLabel([
        'pT0',
        'pT1',
        'pT1a',
        'pT1b',
        'pT2',
        'pT2a',
        'pT2b',
        'pT3',
        'pT3a',
        'pT3b',
        'pT4',
        'pT4a',
        'pT4b',
        'pTX',
      ])
      setXValue([3, 5, 6, 7, 14, 9, 9, 6, 9, 10, 6, 4, 3, 9])
    }
    if (select.target.value === 'Regional Lymph Nodes (pN)') {
      setXLabel([
        'pN0',
        'pN1',
        'pN1a',
        'pN1b',
        'pN1c',
        'pN2',
        'pN2a',
        'pN2b',
        'pN2c',
        'pN3',
        'pN3a',
        'pN3b',
        'pN3c',
        'pNX',
      ])
      setXValue([5, 8, 5, 9, 10, 6, 5, 7, 4, 12, 8, 9, 5, 7])
    }
    if (select.target.value === 'Distant Metastasis (pM)') {
      setXLabel(['pM1a', 'pM1b', 'pM1c', 'pM1d'])
      setXValue([25, 24, 21, 30])
    }
    if (select.target.value === 'Status of Melanoma In Situ at Peripheral Margins') {
      setXLabel([
        'Cannot be assessed',
        'Involved by melanoma in situ',
        'Not applicable',
        'Uninvolved by melanoma in situ',
      ])
      setXValue([21, 30, 27, 22])
    }
    if (select.target.value === 'Size of Largest Metastatic Deposit in Millimeters (mm)') {
      setXLabel(['not determined', '0-5', '5-10', '10-15'])
      setXValue([28, 24, 23, 25])
    }
    if (
      select.target.value ===
      'Distance of Melanoma in situ from Closest Peripheral Margin in Millimeters (mm)'
    ) {
      setXLabel(['not determined', '0-5', '5-10', '10-15'])
      setXValue([35, 24, 23, 18])
    }
    if (
      select.target.value === 'Distance of Melanoma in situ from Deep Margin in Millimeters (mm)'
    ) {
      setXLabel(['not determined', '0-5', '5-10', '10-15'])
      setXValue([34, 19, 17, 30])
    }
    if (
      select.target.value ===
      'Distance of Invasive Melanoma from Closest Peripheral Margin in Millimeters (mm)'
    ) {
      setXLabel(['not determined', '0-5', '5-10', '10-15'])
      setXValue([35, 21, 17, 27])
    }
    if (
      select.target.value === 'Distance of Invasive Melanoma from Deep Margin in Millimeters (mm)'
    ) {
      setXLabel(['not determined', '0-5', '5-10', '10-15'])
      setXValue([29, 23, 18, 30])
    }
    if (select.target.value === 'Number of Lymph Nodes with Tumor') {
      setXLabel(['not determined', '0-5', '5-10', '10-15'])
      setXValue([0, 29.0, 34.0, 37.0])
    }
    if (select.target.value === 'Tumor Size') {
      setXLabel(['not determined', '0-5', '5-10', '10-15'])
      setXValue([49, 13, 18, 20])
    }
    // console.log(select.target.id)
  }
  const handlerLine = (multiSelect) => {
    let tempArray = {
      label: 'Size of Largest Metastatic Deposit in Millimeters (mm)',
      backgroundColor: '#ca2a0b',
      borderColor: '#ca2a0b',
      pointBackgroundColor: '#ca2a0b',
      pointBorderColor: '#fff',
      data: [random(), random(), random(), random()],
    }
    let tempList = []
    const numDataList = {
      'Size of Largest Metastatic Deposit in Millimeters (mm)': [28, 24, 23, 25],
      'Distance of Melanoma in situ from Closest Peripheral Margin in Millimeters (mm)': [
        35, 24, 23, 18,
      ],
      'Distance of Melanoma in situ from Deep Margin in Millimeters (mm)': [34, 19, 17, 30],
      'Distance of Invasive Melanoma from Closest Peripheral Margin in Millimeters (mm)': [
        35, 21, 17, 27,
      ],
      'Distance of Invasive Melanoma from Deep Margin in Millimeters (mm)': [29, 23, 18, 30],
      'Number of Lymph Nodes with Tumor': [0, 29.0, 34.0, 37.0],
      'Tumor Size': [49, 13, 18, 20],
    }
    for (let i = 0; i < multiSelect.length; i++) {
      let tempArr = JSON.parse(JSON.stringify(tempArray))
      tempArr.label = multiSelect[i].label
      // test in input is properly accquired
      // console.log(numDataList[multiSelect[i].label])
      tempArr.data = numDataList[multiSelect[i].label]
      tempArr.backgroundColor = colorList[i]
      tempArr.borderColor = colorList[i]
      tempArr.pointBackgroundColor = colorList[i]
      tempList[i] = tempArr
    }
    setLineValue(tempList)
  }
  const handlerScatter1 = (selectScatter1) => {
    setUserChoiceScatter1(selectScatter1.target.value)
    let tempScatter = {
      x: 0,
      y: 0,
    }
    const scatterDataList = {
      'Size of Largest Metastatic Deposit in Millimeters (mm) vs Distance of Melanoma in situ from Closest Peripheral Margin in Millimeters (mm)':
        [
          [
            7, 7, 0, 1, 5, 6, 8, 12, 4, 1, 4, 6, 8, 11, 4, 14, 2, 4, 7, 14, 9, 11, 9, 7, 5, 0, 2,
            11, 0, 6, 10, 15, 4, 7, 1, 9, 15, 13, 1, 14, 13, 15, 3, 4, 8, 3, 5, 7, 6, 10,
          ],
          [
            4, 3, 1, 9, 10, 5, 11, 0, 4, 6, 9, 4, 14, 13, 1, 6, 13, 9, 10, 10, 6, 1, 4, 7, 5, 10, 7,
            1, 8, 1, 9, 1, 14, 6, 3, 3, 3, 15, 6, 9, 0, 4, 8, 8, 15, 1, 6, 3, 11, 3,
          ],
        ],
      'Size of Largest Metastatic Deposit in Millimeters (mm) vs Distance of Melanoma in situ from Deep Margin in Millimeters (mm)':
        [
          [
            11, 10, 4, 0, 5, 14, 6, 8, 12, 4, 9, 15, 1, 4, 0, 6, 11, 4, 2, 8, 9, 1, 9, 0, 2, 0, 6,
            6, 10, 1, 3, 11, 14, 1, 14, 13, 15, 4, 8, 0, 3, 7, 6, 14, 10,
          ],
          [
            13, 2, 1, 12, 8, 3, 1, 0, 10, 4, 9, 2, 10, 11, 0, 5, 6, 0, 2, 9, 8, 11, 10, 11, 1, 7,
            10, 14, 12, 6, 0, 12, 7, 6, 8, 14, 13, 7, 13, 10, 5, 12, 3, 11, 0,
          ],
        ],
      'Size of Largest Metastatic Deposit in Millimeters (mm) vs Number of Lymph Nodes with Tumor':
        [
          [
            11, 7, 10, 7, 4, 0, 1, 5, 14, 6, 8, 14, 4, 9, 12, 4, 9, 15, 1, 4, 0, 6, 8, 11, 4, 14, 2,
            4, 8, 7, 14, 9, 1, 13, 11, 9, 7, 5, 0, 2, 11, 0, 6, 13, 6, 10, 15, 4, 7, 1, 3, 9, 15,
            13, 11, 14, 1, 14, 13, 15, 3, 10, 4, 8, 3, 0, 5, 3, 7, 6, 14, 10,
          ],
          [
            4, 8, 12, 6, 6, 7, 15, 12, 3, 5, 3, 0, 12, 0, 1, 3, 1, 8, 5, 10, 6, 14, 14, 5, 13, 6, 7,
            13, 4, 15, 8, 5, 7, 14, 10, 0, 0, 2, 11, 12, 9, 1, 8, 9, 7, 1, 13, 14, 5, 6, 5, 2, 0,
            14, 15, 4, 14, 10, 13, 3, 0, 4, 8, 1, 14, 10, 0, 7, 10, 8, 11, 4,
          ],
        ],
      'Distance of Melanoma in situ from Closest Peripheral Margin in Millimeters (mm) vs Distance of Melanoma in situ from Deep Margin in Millimeters (mm)':
        [
          [
            14, 1, 12, 10, 14, 10, 5, 11, 0, 4, 6, 9, 4, 13, 1, 13, 6, 4, 10, 7, 9, 8, 1, 9, 3, 4,
            12, 5, 5, 5, 6, 9, 0, 4, 8, 15, 3, 6, 11, 10, 3,
          ],
          [
            14, 12, 8, 14, 1, 8, 1, 0, 10, 4, 10, 11, 5, 6, 0, 2, 8, 10, 11, 1, 15, 7, 10, 12, 6, 6,
            12, 14, 15, 14, 6, 8, 14, 13, 7, 13, 12, 6, 3, 4, 0,
          ],
        ],
      'Distance of Melanoma in situ from Closest Peripheral Margin in Millimeters (mm) vs Distance of Invasive Melanoma from Closest Peripheral Margin in Millimeters (mm)':
        [
          [
            4, 14, 3, 12, 9, 10, 14, 10, 5, 11, 0, 4, 6, 9, 13, 1, 13, 10, 10, 6, 1, 4, 7, 5, 9, 14,
            3, 4, 12, 5, 3, 15, 2, 5, 5, 6, 9, 0, 8, 15, 6, 11, 3,
          ],
          [
            8, 8, 11, 15, 7, 1, 8, 13, 14, 1, 11, 0, 0, 14, 8, 8, 7, 3, 3, 2, 13, 3, 2, 10, 10, 13,
            12, 8, 12, 10, 11, 11, 4, 4, 10, 9, 7, 14, 12, 14, 6, 13, 1,
          ],
        ],
      'Distance of Melanoma in situ from Closest Peripheral Margin in Millimeters (mm) vs Distance of Invasive Melanoma from Deep Margin in Millimeters (mm)':
        [
          [
            3, 3, 1, 9, 14, 10, 5, 0, 6, 9, 4, 14, 13, 1, 9, 6, 1, 4, 5, 10, 7, 8, 1, 14, 6, 3, 4,
            12, 3, 5, 3, 4, 15, 5, 0, 4, 8, 8, 1, 6, 3, 6, 3,
          ],
          [
            1, 11, 9, 10, 12, 3, 4, 9, 12, 2, 1, 5, 9, 4, 12, 11, 13, 0, 4, 4, 4, 9, 6, 11, 3, 2, 8,
            1, 10, 8, 11, 3, 14, 15, 14, 9, 11, 15, 4, 15, 8, 4, 12,
          ],
        ],
      'Distance of Melanoma in situ from Closest Peripheral Margin in Millimeters (mm) vs Number of Lymph Nodes with Tumor':
        [
          [
            4, 3, 14, 3, 1, 12, 9, 10, 14, 10, 5, 11, 0, 4, 6, 9, 4, 14, 13, 1, 6, 13, 9, 10, 10, 6,
            1, 4, 7, 5, 10, 7, 9, 1, 8, 1, 9, 1, 14, 6, 3, 4, 12, 3, 5, 3, 4, 15, 2, 5, 5, 6, 9, 0,
            4, 8, 8, 15, 1, 6, 3, 6, 11, 10, 3,
          ],
          [
            8, 14, 6, 6, 7, 13, 15, 11, 12, 12, 5, 3, 1, 3, 5, 10, 14, 14, 5, 13, 6, 7, 13, 15, 8,
            5, 10, 0, 0, 2, 11, 12, 8, 9, 1, 8, 1, 13, 14, 5, 6, 8, 8, 2, 9, 0, 7, 14, 0, 15, 13,
            14, 10, 13, 3, 0, 8, 1, 14, 0, 10, 12, 8, 8, 4,
          ],
        ],
      'Distance of Melanoma in situ from Closest Peripheral Margin in Millimeters (mm) vs Tumor Size':
        [
          [
            4, 3, 14, 9, 14, 10, 5, 11, 0, 4, 9, 14, 6, 10, 10, 1, 4, 7, 5, 9, 1, 1, 12, 3, 4, 15,
            2, 5, 5, 6, 8, 6, 11, 3,
          ],
          [
            0, 4, 12, 4, 9, 6, 3, 10, 11, 7, 7, 7, 15, 5, 6, 12, 7, 10, 4, 14, 10, 0, 15, 9, 11, 7,
            3, 4, 14, 13, 1, 1, 1, 9,
          ],
        ],
      'Distance of Melanoma in situ from Deep Margin in Millimeters (mm) vs Distance of Invasive Melanoma from Closest Peripheral Margin in Millimeters (mm)':
        [
          [
            13, 2, 14, 8, 11, 14, 1, 8, 1, 0, 13, 10, 4, 9, 10, 11, 0, 15, 6, 0, 2, 9, 8, 11, 10,
            12, 2, 6, 0, 6, 12, 14, 12, 15, 14, 6, 8, 14, 7, 13, 5, 6, 3, 0,
          ],
          [
            13, 1, 8, 15, 4, 1, 8, 13, 14, 1, 8, 11, 0, 7, 0, 14, 11, 4, 8, 8, 7, 11, 2, 15, 3, 10,
            1, 12, 7, 8, 12, 10, 1, 4, 10, 9, 7, 14, 12, 14, 14, 6, 13, 1,
          ],
        ],
      'Distance of Melanoma in situ from Deep Margin in Millimeters (mm) vs Distance of Invasive Melanoma from Deep Margin in Millimeters (mm)':
        [
          [
            14, 13, 1, 12, 11, 1, 8, 3, 1, 13, 4, 10, 9, 9, 10, 11, 0, 15, 5, 6, 0, 9, 10, 8, 11,
            10, 11, 1, 7, 14, 2, 6, 0, 6, 12, 14, 12, 7, 14, 14, 13, 7, 10, 5, 12, 6, 0,
          ],
          [
            15, 10, 4, 9, 12, 12, 3, 13, 4, 6, 14, 9, 4, 7, 12, 2, 15, 15, 1, 9, 4, 11, 6, 11, 9, 0,
            4, 4, 9, 12, 7, 2, 15, 8, 1, 8, 10, 2, 15, 14, 9, 15, 0, 6, 8, 4, 12,
          ],
        ],
      'Distance of Melanoma in situ from Deep Margin in Millimeters (mm) vs Number of Lymph Nodes with Tumor':
        [
          [
            14, 13, 2, 14, 1, 12, 8, 11, 14, 1, 8, 3, 1, 0, 13, 4, 10, 9, 4, 4, 9, 2, 10, 11, 0, 15,
            5, 6, 0, 2, 9, 10, 8, 11, 10, 11, 1, 15, 7, 10, 14, 12, 2, 6, 0, 6, 12, 14, 12, 7, 15,
            14, 6, 8, 14, 13, 7, 13, 10, 5, 12, 6, 3, 11, 4, 0,
          ],
          [
            6, 4, 12, 6, 6, 7, 13, 6, 11, 12, 12, 3, 5, 3, 14, 11, 1, 13, 10, 3, 1, 8, 5, 10, 6, 2,
            14, 5, 13, 7, 4, 3, 5, 7, 0, 11, 12, 8, 1, 8, 7, 1, 1, 6, 5, 8, 8, 9, 15, 4, 15, 13, 14,
            10, 13, 3, 8, 1, 10, 7, 10, 12, 8, 11, 8, 4,
          ],
        ],
      'Distance of Melanoma in situ from Deep Margin in Millimeters (mm) vs Tumor Size': [
        [
          14, 13, 14, 1, 11, 1, 8, 3, 1, 0, 10, 9, 4, 11, 15, 10, 10, 15, 14, 2, 12, 12, 15, 14, 6,
          7, 10, 5, 6, 3, 0,
        ],
        [
          9, 12, 12, 8, 8, 9, 6, 0, 3, 10, 11, 3, 7, 7, 9, 10, 7, 14, 11, 15, 15, 5, 4, 14, 13, 1,
          15, 15, 1, 1, 9,
        ],
      ],
      'Distance of Invasive Melanoma from Closest Peripheral Margin in Millimeters (mm) vs Distance of Invasive Melanoma from Deep Margin in Millimeters (mm)':
        [
          [
            13, 11, 4, 7, 8, 13, 13, 14, 8, 2, 13, 2, 11, 7, 0, 14, 11, 4, 8, 8, 11, 2, 15, 9, 13,
            3, 10, 6, 13, 5, 1, 12, 7, 8, 12, 10, 11, 11, 1, 10, 14, 12, 14, 6, 1,
          ],
          [
            10, 11, 12, 10, 12, 3, 5, 4, 6, 10, 8, 2, 9, 7, 12, 2, 15, 15, 9, 4, 11, 11, 9, 11, 13,
            0, 4, 0, 11, 2, 7, 2, 15, 8, 1, 8, 11, 14, 10, 15, 14, 15, 6, 4, 12,
          ],
        ],
      'Distance of Invasive Melanoma from Closest Peripheral Margin in Millimeters (mm) vs Number of Lymph Nodes with Tumor':
        [
          [
            13, 8, 1, 8, 11, 15, 4, 7, 1, 8, 13, 13, 14, 1, 8, 2, 13, 2, 11, 0, 7, 0, 14, 11, 4, 8,
            8, 7, 11, 3, 3, 2, 15, 9, 13, 3, 2, 10, 6, 10, 13, 5, 1, 12, 7, 8, 12, 10, 11, 11, 4, 1,
            4, 10, 9, 7, 14, 3, 1, 12, 14, 14, 6, 13, 1,
          ],
          [
            4, 8, 12, 6, 6, 13, 6, 15, 11, 12, 12, 13, 5, 3, 14, 0, 12, 0, 1, 3, 1, 5, 10, 6, 2, 5,
            13, 7, 4, 15, 8, 5, 7, 14, 10, 0, 0, 2, 9, 1, 14, 3, 1, 6, 5, 8, 8, 9, 0, 14, 0, 15, 15,
            13, 14, 10, 13, 0, 4, 8, 1, 7, 12, 8, 4,
          ],
        ],
      'Distance of Invasive Melanoma from Closest Peripheral Margin in Millimeters (mm) vs Tumor Size':
        [
          [
            13, 8, 8, 4, 7, 8, 13, 14, 1, 2, 2, 11, 0, 14, 4, 3, 3, 9, 13, 3, 2, 10, 1, 12, 11, 11,
            4, 1, 4, 10, 9, 12, 14, 6, 13, 1,
          ],
          [
            12, 0, 12, 8, 4, 9, 6, 3, 10, 12, 7, 11, 7, 7, 9, 5, 6, 13, 12, 7, 10, 4, 15, 15, 9, 7,
            3, 5, 4, 14, 13, 1, 15, 1, 1, 9,
          ],
        ],
      'Distance of Invasive Melanoma from Deep Margin in Millimeters (mm) vs Number of Lymph Nodes with Tumor':
        [
          [
            15, 10, 1, 11, 4, 9, 12, 10, 12, 3, 13, 5, 4, 6, 10, 8, 2, 14, 9, 4, 7, 12, 2, 15, 15,
            1, 5, 9, 4, 12, 11, 6, 11, 9, 11, 13, 0, 4, 4, 4, 9, 0, 12, 6, 11, 2, 3, 7, 2, 15, 8, 1,
            10, 8, 11, 3, 14, 10, 2, 15, 14, 9, 11, 15, 4, 0, 15, 6, 8, 4, 12,
          ],
          [
            6, 4, 14, 6, 6, 7, 6, 15, 12, 12, 3, 13, 5, 14, 0, 12, 0, 11, 1, 13, 1, 5, 10, 6, 2, 14,
            14, 5, 13, 13, 4, 3, 5, 7, 14, 10, 0, 2, 11, 12, 1, 9, 7, 13, 14, 3, 5, 1, 6, 5, 8, 8,
            2, 9, 0, 7, 14, 15, 4, 13, 13, 3, 0, 8, 14, 10, 0, 7, 10, 12, 4,
          ],
        ],
      'Distance of Invasive Melanoma from Deep Margin in Millimeters (mm) vs Tumor Size': [
        [
          15, 10, 1, 4, 12, 10, 12, 3, 13, 4, 10, 2, 9, 4, 2, 15, 5, 6, 11, 13, 0, 4, 12, 6, 7, 1,
          11, 3, 14, 10, 15, 15, 0, 6, 4, 12,
        ],
        [
          9, 12, 4, 8, 8, 4, 9, 6, 0, 3, 12, 7, 11, 3, 7, 9, 7, 10, 13, 12, 7, 4, 11, 0, 15, 15, 9,
          11, 7, 5, 14, 1, 15, 15, 1, 9,
        ],
      ],
      'Number of Lymph Nodes with Tumor vs Tumor Size': [
        [
          6, 4, 8, 14, 6, 6, 6, 15, 12, 12, 3, 5, 3, 8, 0, 0, 1, 13, 3, 10, 2, 14, 6, 15, 3, 8, 14,
          10, 0, 0, 2, 8, 9, 7, 13, 1, 8, 0, 7, 14, 0, 15, 15, 13, 14, 8, 10, 7, 12, 8, 4,
        ],
        [
          9, 12, 0, 4, 12, 8, 8, 4, 9, 6, 0, 3, 10, 9, 12, 7, 11, 3, 7, 7, 9, 7, 15, 5, 10, 6, 13,
          12, 7, 10, 4, 14, 10, 11, 0, 15, 15, 9, 11, 7, 3, 5, 4, 14, 13, 1, 15, 15, 1, 1, 9,
        ],
      ],
      'Size of Largest Metastatic Deposit in Millimeters (mm) vs Tumor Size': [
        [
          11, 7, 4, 1, 5, 14, 6, 8, 14, 9, 12, 4, 4, 8, 14, 7, 14, 13, 11, 9, 7, 5, 11, 6, 15, 15,
          13, 11, 1, 4, 0, 3, 6, 10,
        ],
        [
          12, 0, 8, 4, 6, 0, 3, 10, 12, 7, 11, 7, 7, 7, 15, 5, 6, 13, 12, 7, 10, 4, 10, 11, 0, 9, 7,
          5, 13, 1, 15, 15, 1, 9,
        ],
      ],
      'Size of Largest Metastatic Deposit in Millimeters (mm) vs Distance of Invasive Melanoma from Deep Margin in Millimeters (mm)':
        [
          [
            11, 7, 4, 0, 1, 5, 14, 6, 14, 4, 9, 12, 9, 1, 4, 0, 6, 8, 11, 4, 4, 8, 9, 1, 13, 11, 9,
            5, 0, 2, 0, 13, 6, 15, 4, 7, 1, 3, 9, 15, 13, 11, 14, 13, 15, 3, 4, 3, 0, 5, 3, 7, 10,
          ],
          [
            10, 11, 4, 9, 10, 3, 13, 4, 10, 8, 2, 9, 7, 12, 2, 15, 1, 5, 9, 4, 12, 11, 11, 9, 11,
            13, 0, 4, 4, 4, 9, 0, 12, 6, 11, 3, 2, 15, 10, 11, 14, 10, 2, 14, 9, 11, 15, 4, 0, 15,
            6, 8, 12,
          ],
        ],
      'Size of Largest Metastatic Deposit in Millimeters (mm) vs Distance of Invasive Melanoma from Closest Peripheral Margin in Millimeters (mm)':
        [
          [
            11, 7, 10, 7, 1, 5, 6, 8, 14, 4, 9, 12, 4, 9, 1, 4, 0, 11, 4, 2, 8, 7, 14, 9, 1, 13, 11,
            9, 7, 5, 13, 10, 4, 1, 3, 15, 13, 11, 1, 14, 13, 10, 4, 8, 3, 6, 10,
          ],
          [
            13, 8, 1, 11, 7, 13, 14, 1, 2, 13, 2, 11, 0, 7, 0, 14, 11, 8, 8, 7, 11, 3, 3, 2, 15, 9,
            13, 3, 2, 10, 6, 10, 13, 12, 7, 11, 11, 1, 9, 7, 14, 1, 12, 14, 14, 13, 1,
          ],
        ],
    }
    let tempScatList = []
    let tempLabel2 = format('{0} vs {1}', selectScatter1.target.value, userChoiceScatter2)
    let tempLabel1 = format('{0} vs {1}', userChoiceScatter2, selectScatter1.target.value)
    if (selectScatter1.target.value === userChoiceScatter2) {
      setScatterVal([tempScatter])
    } else if (scatterDataList[tempLabel1] === undefined) {
      console.log(scatterDataList[tempLabel1] === undefined)
      for (let k = 0; k < scatterDataList[tempLabel2][0].length; k++) {
        let tempScat = JSON.parse(JSON.stringify(tempScatter))
        tempScat.x = scatterDataList[tempLabel2][0][k]
        tempScat.y = scatterDataList[tempLabel2][1][k]
        tempScatList[k] = tempScat
        // console.log(scatterDataList[tempLabel2][0][k])
      }
      // console.log('2')
      // console.log(tempScatList)
    } else if (scatterDataList[tempLabel2] === undefined) {
      for (let k = 0; k < scatterDataList[tempLabel1][0].length; k++) {
        let tempScat = JSON.parse(JSON.stringify(tempScatter))
        tempScat.x = scatterDataList[tempLabel1][0][k]
        tempScat.y = scatterDataList[tempLabel1][1][k]
        tempScatList[k] = tempScat
        // console.log(scatterDataList[tempLabel1][0][k])
      }
      // console.log('1')
      // console.log(tempScatList)
    }
    setScatterVal(tempScatList)
  }
  const handlerScatter2 = (selectScatter2) => {
    setUserChoiceScatter2(selectScatter2.target.value)
    let tempScatter = {
      x: 0,
      y: 0,
    }
    const scatterDataList = {
      'Size of Largest Metastatic Deposit in Millimeters (mm) vs Distance of Melanoma in situ from Closest Peripheral Margin in Millimeters (mm)':
        [
          [
            7, 7, 0, 1, 5, 6, 8, 12, 4, 1, 4, 6, 8, 11, 4, 14, 2, 4, 7, 14, 9, 11, 9, 7, 5, 0, 2,
            11, 0, 6, 10, 15, 4, 7, 1, 9, 15, 13, 1, 14, 13, 15, 3, 4, 8, 3, 5, 7, 6, 10,
          ],
          [
            4, 3, 1, 9, 10, 5, 11, 0, 4, 6, 9, 4, 14, 13, 1, 6, 13, 9, 10, 10, 6, 1, 4, 7, 5, 10, 7,
            1, 8, 1, 9, 1, 14, 6, 3, 3, 3, 15, 6, 9, 0, 4, 8, 8, 15, 1, 6, 3, 11, 3,
          ],
        ],
      'Size of Largest Metastatic Deposit in Millimeters (mm) vs Distance of Melanoma in situ from Deep Margin in Millimeters (mm)':
        [
          [
            11, 10, 4, 0, 5, 14, 6, 8, 12, 4, 9, 15, 1, 4, 0, 6, 11, 4, 2, 8, 9, 1, 9, 0, 2, 0, 6,
            6, 10, 1, 3, 11, 14, 1, 14, 13, 15, 4, 8, 0, 3, 7, 6, 14, 10,
          ],
          [
            13, 2, 1, 12, 8, 3, 1, 0, 10, 4, 9, 2, 10, 11, 0, 5, 6, 0, 2, 9, 8, 11, 10, 11, 1, 7,
            10, 14, 12, 6, 0, 12, 7, 6, 8, 14, 13, 7, 13, 10, 5, 12, 3, 11, 0,
          ],
        ],
      'Size of Largest Metastatic Deposit in Millimeters (mm) vs Number of Lymph Nodes with Tumor':
        [
          [
            11, 7, 10, 7, 4, 0, 1, 5, 14, 6, 8, 14, 4, 9, 12, 4, 9, 15, 1, 4, 0, 6, 8, 11, 4, 14, 2,
            4, 8, 7, 14, 9, 1, 13, 11, 9, 7, 5, 0, 2, 11, 0, 6, 13, 6, 10, 15, 4, 7, 1, 3, 9, 15,
            13, 11, 14, 1, 14, 13, 15, 3, 10, 4, 8, 3, 0, 5, 3, 7, 6, 14, 10,
          ],
          [
            4, 8, 12, 6, 6, 7, 15, 12, 3, 5, 3, 0, 12, 0, 1, 3, 1, 8, 5, 10, 6, 14, 14, 5, 13, 6, 7,
            13, 4, 15, 8, 5, 7, 14, 10, 0, 0, 2, 11, 12, 9, 1, 8, 9, 7, 1, 13, 14, 5, 6, 5, 2, 0,
            14, 15, 4, 14, 10, 13, 3, 0, 4, 8, 1, 14, 10, 0, 7, 10, 8, 11, 4,
          ],
        ],
      'Distance of Melanoma in situ from Closest Peripheral Margin in Millimeters (mm) vs Distance of Melanoma in situ from Deep Margin in Millimeters (mm)':
        [
          [
            14, 1, 12, 10, 14, 10, 5, 11, 0, 4, 6, 9, 4, 13, 1, 13, 6, 4, 10, 7, 9, 8, 1, 9, 3, 4,
            12, 5, 5, 5, 6, 9, 0, 4, 8, 15, 3, 6, 11, 10, 3,
          ],
          [
            14, 12, 8, 14, 1, 8, 1, 0, 10, 4, 10, 11, 5, 6, 0, 2, 8, 10, 11, 1, 15, 7, 10, 12, 6, 6,
            12, 14, 15, 14, 6, 8, 14, 13, 7, 13, 12, 6, 3, 4, 0,
          ],
        ],
      'Distance of Melanoma in situ from Closest Peripheral Margin in Millimeters (mm) vs Distance of Invasive Melanoma from Closest Peripheral Margin in Millimeters (mm)':
        [
          [
            4, 14, 3, 12, 9, 10, 14, 10, 5, 11, 0, 4, 6, 9, 13, 1, 13, 10, 10, 6, 1, 4, 7, 5, 9, 14,
            3, 4, 12, 5, 3, 15, 2, 5, 5, 6, 9, 0, 8, 15, 6, 11, 3,
          ],
          [
            8, 8, 11, 15, 7, 1, 8, 13, 14, 1, 11, 0, 0, 14, 8, 8, 7, 3, 3, 2, 13, 3, 2, 10, 10, 13,
            12, 8, 12, 10, 11, 11, 4, 4, 10, 9, 7, 14, 12, 14, 6, 13, 1,
          ],
        ],
      'Distance of Melanoma in situ from Closest Peripheral Margin in Millimeters (mm) vs Distance of Invasive Melanoma from Deep Margin in Millimeters (mm)':
        [
          [
            3, 3, 1, 9, 14, 10, 5, 0, 6, 9, 4, 14, 13, 1, 9, 6, 1, 4, 5, 10, 7, 8, 1, 14, 6, 3, 4,
            12, 3, 5, 3, 4, 15, 5, 0, 4, 8, 8, 1, 6, 3, 6, 3,
          ],
          [
            1, 11, 9, 10, 12, 3, 4, 9, 12, 2, 1, 5, 9, 4, 12, 11, 13, 0, 4, 4, 4, 9, 6, 11, 3, 2, 8,
            1, 10, 8, 11, 3, 14, 15, 14, 9, 11, 15, 4, 15, 8, 4, 12,
          ],
        ],
      'Distance of Melanoma in situ from Closest Peripheral Margin in Millimeters (mm) vs Number of Lymph Nodes with Tumor':
        [
          [
            4, 3, 14, 3, 1, 12, 9, 10, 14, 10, 5, 11, 0, 4, 6, 9, 4, 14, 13, 1, 6, 13, 9, 10, 10, 6,
            1, 4, 7, 5, 10, 7, 9, 1, 8, 1, 9, 1, 14, 6, 3, 4, 12, 3, 5, 3, 4, 15, 2, 5, 5, 6, 9, 0,
            4, 8, 8, 15, 1, 6, 3, 6, 11, 10, 3,
          ],
          [
            8, 14, 6, 6, 7, 13, 15, 11, 12, 12, 5, 3, 1, 3, 5, 10, 14, 14, 5, 13, 6, 7, 13, 15, 8,
            5, 10, 0, 0, 2, 11, 12, 8, 9, 1, 8, 1, 13, 14, 5, 6, 8, 8, 2, 9, 0, 7, 14, 0, 15, 13,
            14, 10, 13, 3, 0, 8, 1, 14, 0, 10, 12, 8, 8, 4,
          ],
        ],
      'Distance of Melanoma in situ from Closest Peripheral Margin in Millimeters (mm) vs Tumor Size':
        [
          [
            4, 3, 14, 9, 14, 10, 5, 11, 0, 4, 9, 14, 6, 10, 10, 1, 4, 7, 5, 9, 1, 1, 12, 3, 4, 15,
            2, 5, 5, 6, 8, 6, 11, 3,
          ],
          [
            0, 4, 12, 4, 9, 6, 3, 10, 11, 7, 7, 7, 15, 5, 6, 12, 7, 10, 4, 14, 10, 0, 15, 9, 11, 7,
            3, 4, 14, 13, 1, 1, 1, 9,
          ],
        ],
      'Distance of Melanoma in situ from Deep Margin in Millimeters (mm) vs Distance of Invasive Melanoma from Closest Peripheral Margin in Millimeters (mm)':
        [
          [
            13, 2, 14, 8, 11, 14, 1, 8, 1, 0, 13, 10, 4, 9, 10, 11, 0, 15, 6, 0, 2, 9, 8, 11, 10,
            12, 2, 6, 0, 6, 12, 14, 12, 15, 14, 6, 8, 14, 7, 13, 5, 6, 3, 0,
          ],
          [
            13, 1, 8, 15, 4, 1, 8, 13, 14, 1, 8, 11, 0, 7, 0, 14, 11, 4, 8, 8, 7, 11, 2, 15, 3, 10,
            1, 12, 7, 8, 12, 10, 1, 4, 10, 9, 7, 14, 12, 14, 14, 6, 13, 1,
          ],
        ],
      'Distance of Melanoma in situ from Deep Margin in Millimeters (mm) vs Distance of Invasive Melanoma from Deep Margin in Millimeters (mm)':
        [
          [
            14, 13, 1, 12, 11, 1, 8, 3, 1, 13, 4, 10, 9, 9, 10, 11, 0, 15, 5, 6, 0, 9, 10, 8, 11,
            10, 11, 1, 7, 14, 2, 6, 0, 6, 12, 14, 12, 7, 14, 14, 13, 7, 10, 5, 12, 6, 0,
          ],
          [
            15, 10, 4, 9, 12, 12, 3, 13, 4, 6, 14, 9, 4, 7, 12, 2, 15, 15, 1, 9, 4, 11, 6, 11, 9, 0,
            4, 4, 9, 12, 7, 2, 15, 8, 1, 8, 10, 2, 15, 14, 9, 15, 0, 6, 8, 4, 12,
          ],
        ],
      'Distance of Melanoma in situ from Deep Margin in Millimeters (mm) vs Number of Lymph Nodes with Tumor':
        [
          [
            14, 13, 2, 14, 1, 12, 8, 11, 14, 1, 8, 3, 1, 0, 13, 4, 10, 9, 4, 4, 9, 2, 10, 11, 0, 15,
            5, 6, 0, 2, 9, 10, 8, 11, 10, 11, 1, 15, 7, 10, 14, 12, 2, 6, 0, 6, 12, 14, 12, 7, 15,
            14, 6, 8, 14, 13, 7, 13, 10, 5, 12, 6, 3, 11, 4, 0,
          ],
          [
            6, 4, 12, 6, 6, 7, 13, 6, 11, 12, 12, 3, 5, 3, 14, 11, 1, 13, 10, 3, 1, 8, 5, 10, 6, 2,
            14, 5, 13, 7, 4, 3, 5, 7, 0, 11, 12, 8, 1, 8, 7, 1, 1, 6, 5, 8, 8, 9, 15, 4, 15, 13, 14,
            10, 13, 3, 8, 1, 10, 7, 10, 12, 8, 11, 8, 4,
          ],
        ],
      'Distance of Melanoma in situ from Deep Margin in Millimeters (mm) vs Tumor Size': [
        [
          14, 13, 14, 1, 11, 1, 8, 3, 1, 0, 10, 9, 4, 11, 15, 10, 10, 15, 14, 2, 12, 12, 15, 14, 6,
          7, 10, 5, 6, 3, 0,
        ],
        [
          9, 12, 12, 8, 8, 9, 6, 0, 3, 10, 11, 3, 7, 7, 9, 10, 7, 14, 11, 15, 15, 5, 4, 14, 13, 1,
          15, 15, 1, 1, 9,
        ],
      ],
      'Distance of Invasive Melanoma from Closest Peripheral Margin in Millimeters (mm) vs Distance of Invasive Melanoma from Deep Margin in Millimeters (mm)':
        [
          [
            13, 11, 4, 7, 8, 13, 13, 14, 8, 2, 13, 2, 11, 7, 0, 14, 11, 4, 8, 8, 11, 2, 15, 9, 13,
            3, 10, 6, 13, 5, 1, 12, 7, 8, 12, 10, 11, 11, 1, 10, 14, 12, 14, 6, 1,
          ],
          [
            10, 11, 12, 10, 12, 3, 5, 4, 6, 10, 8, 2, 9, 7, 12, 2, 15, 15, 9, 4, 11, 11, 9, 11, 13,
            0, 4, 0, 11, 2, 7, 2, 15, 8, 1, 8, 11, 14, 10, 15, 14, 15, 6, 4, 12,
          ],
        ],
      'Distance of Invasive Melanoma from Closest Peripheral Margin in Millimeters (mm) vs Number of Lymph Nodes with Tumor':
        [
          [
            13, 8, 1, 8, 11, 15, 4, 7, 1, 8, 13, 13, 14, 1, 8, 2, 13, 2, 11, 0, 7, 0, 14, 11, 4, 8,
            8, 7, 11, 3, 3, 2, 15, 9, 13, 3, 2, 10, 6, 10, 13, 5, 1, 12, 7, 8, 12, 10, 11, 11, 4, 1,
            4, 10, 9, 7, 14, 3, 1, 12, 14, 14, 6, 13, 1,
          ],
          [
            4, 8, 12, 6, 6, 13, 6, 15, 11, 12, 12, 13, 5, 3, 14, 0, 12, 0, 1, 3, 1, 5, 10, 6, 2, 5,
            13, 7, 4, 15, 8, 5, 7, 14, 10, 0, 0, 2, 9, 1, 14, 3, 1, 6, 5, 8, 8, 9, 0, 14, 0, 15, 15,
            13, 14, 10, 13, 0, 4, 8, 1, 7, 12, 8, 4,
          ],
        ],
      'Distance of Invasive Melanoma from Closest Peripheral Margin in Millimeters (mm) vs Tumor Size':
        [
          [
            13, 8, 8, 4, 7, 8, 13, 14, 1, 2, 2, 11, 0, 14, 4, 3, 3, 9, 13, 3, 2, 10, 1, 12, 11, 11,
            4, 1, 4, 10, 9, 12, 14, 6, 13, 1,
          ],
          [
            12, 0, 12, 8, 4, 9, 6, 3, 10, 12, 7, 11, 7, 7, 9, 5, 6, 13, 12, 7, 10, 4, 15, 15, 9, 7,
            3, 5, 4, 14, 13, 1, 15, 1, 1, 9,
          ],
        ],
      'Distance of Invasive Melanoma from Deep Margin in Millimeters (mm) vs Number of Lymph Nodes with Tumor':
        [
          [
            15, 10, 1, 11, 4, 9, 12, 10, 12, 3, 13, 5, 4, 6, 10, 8, 2, 14, 9, 4, 7, 12, 2, 15, 15,
            1, 5, 9, 4, 12, 11, 6, 11, 9, 11, 13, 0, 4, 4, 4, 9, 0, 12, 6, 11, 2, 3, 7, 2, 15, 8, 1,
            10, 8, 11, 3, 14, 10, 2, 15, 14, 9, 11, 15, 4, 0, 15, 6, 8, 4, 12,
          ],
          [
            6, 4, 14, 6, 6, 7, 6, 15, 12, 12, 3, 13, 5, 14, 0, 12, 0, 11, 1, 13, 1, 5, 10, 6, 2, 14,
            14, 5, 13, 13, 4, 3, 5, 7, 14, 10, 0, 2, 11, 12, 1, 9, 7, 13, 14, 3, 5, 1, 6, 5, 8, 8,
            2, 9, 0, 7, 14, 15, 4, 13, 13, 3, 0, 8, 14, 10, 0, 7, 10, 12, 4,
          ],
        ],
      'Distance of Invasive Melanoma from Deep Margin in Millimeters (mm) vs Tumor Size': [
        [
          15, 10, 1, 4, 12, 10, 12, 3, 13, 4, 10, 2, 9, 4, 2, 15, 5, 6, 11, 13, 0, 4, 12, 6, 7, 1,
          11, 3, 14, 10, 15, 15, 0, 6, 4, 12,
        ],
        [
          9, 12, 4, 8, 8, 4, 9, 6, 0, 3, 12, 7, 11, 3, 7, 9, 7, 10, 13, 12, 7, 4, 11, 0, 15, 15, 9,
          11, 7, 5, 14, 1, 15, 15, 1, 9,
        ],
      ],
      'Number of Lymph Nodes with Tumor vs Tumor Size': [
        [
          6, 4, 8, 14, 6, 6, 6, 15, 12, 12, 3, 5, 3, 8, 0, 0, 1, 13, 3, 10, 2, 14, 6, 15, 3, 8, 14,
          10, 0, 0, 2, 8, 9, 7, 13, 1, 8, 0, 7, 14, 0, 15, 15, 13, 14, 8, 10, 7, 12, 8, 4,
        ],
        [
          9, 12, 0, 4, 12, 8, 8, 4, 9, 6, 0, 3, 10, 9, 12, 7, 11, 3, 7, 7, 9, 7, 15, 5, 10, 6, 13,
          12, 7, 10, 4, 14, 10, 11, 0, 15, 15, 9, 11, 7, 3, 5, 4, 14, 13, 1, 15, 15, 1, 1, 9,
        ],
      ],
      'Size of Largest Metastatic Deposit in Millimeters (mm) vs Tumor Size': [
        [
          11, 7, 4, 1, 5, 14, 6, 8, 14, 9, 12, 4, 4, 8, 14, 7, 14, 13, 11, 9, 7, 5, 11, 6, 15, 15,
          13, 11, 1, 4, 0, 3, 6, 10,
        ],
        [
          12, 0, 8, 4, 6, 0, 3, 10, 12, 7, 11, 7, 7, 7, 15, 5, 6, 13, 12, 7, 10, 4, 10, 11, 0, 9, 7,
          5, 13, 1, 15, 15, 1, 9,
        ],
      ],
      'Size of Largest Metastatic Deposit in Millimeters (mm) vs Distance of Invasive Melanoma from Deep Margin in Millimeters (mm)':
        [
          [
            11, 7, 4, 0, 1, 5, 14, 6, 14, 4, 9, 12, 9, 1, 4, 0, 6, 8, 11, 4, 4, 8, 9, 1, 13, 11, 9,
            5, 0, 2, 0, 13, 6, 15, 4, 7, 1, 3, 9, 15, 13, 11, 14, 13, 15, 3, 4, 3, 0, 5, 3, 7, 10,
          ],
          [
            10, 11, 4, 9, 10, 3, 13, 4, 10, 8, 2, 9, 7, 12, 2, 15, 1, 5, 9, 4, 12, 11, 11, 9, 11,
            13, 0, 4, 4, 4, 9, 0, 12, 6, 11, 3, 2, 15, 10, 11, 14, 10, 2, 14, 9, 11, 15, 4, 0, 15,
            6, 8, 12,
          ],
        ],
      'Size of Largest Metastatic Deposit in Millimeters (mm) vs Distance of Invasive Melanoma from Closest Peripheral Margin in Millimeters (mm)':
        [
          [
            11, 7, 10, 7, 1, 5, 6, 8, 14, 4, 9, 12, 4, 9, 1, 4, 0, 11, 4, 2, 8, 7, 14, 9, 1, 13, 11,
            9, 7, 5, 13, 10, 4, 1, 3, 15, 13, 11, 1, 14, 13, 10, 4, 8, 3, 6, 10,
          ],
          [
            13, 8, 1, 11, 7, 13, 14, 1, 2, 13, 2, 11, 0, 7, 0, 14, 11, 8, 8, 7, 11, 3, 3, 2, 15, 9,
            13, 3, 2, 10, 6, 10, 13, 12, 7, 11, 11, 1, 9, 7, 14, 1, 12, 14, 14, 13, 1,
          ],
        ],
    }
    let tempScatList = []
    let tempLabel2 = format('{0} vs {1}', selectScatter2.target.value, userChoiceScatter1)
    let tempLabel1 = format('{0} vs {1}', userChoiceScatter1, selectScatter2.target.value)
    if (selectScatter2.target.value === userChoiceScatter1) {
      setScatterVal([tempScatter])
    } else if (scatterDataList[tempLabel1] === undefined) {
      for (let k = 0; k < scatterDataList[tempLabel2][0].length; k++) {
        let tempScat = JSON.parse(JSON.stringify(tempScatter))
        tempScat.x = scatterDataList[tempLabel2][0][k]
        tempScat.y = scatterDataList[tempLabel2][1][k]
        tempScatList[k] = tempScat
        // console.log(scatterDataList[tempLabel2][0][k])
      }
      // console.log('2')
      // console.log(tempScatList)
    } else if (scatterDataList[tempLabel2] === undefined) {
      for (let k = 0; k < scatterDataList[tempLabel1][0].length; k++) {
        let tempScat = JSON.parse(JSON.stringify(tempScatter))
        tempScat.x = scatterDataList[tempLabel1][0][k]
        tempScat.y = scatterDataList[tempLabel1][1][k]
        tempScatList[k] = tempScat
        // console.log(scatterDataList[tempLabel1][0][k])
      }
      // console.log('1')
      // console.log(tempScatList)
    }
    setScatterVal(tempScatList)
  }
  return (
    <CRow>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Bar Chart</CCardHeader>
          <CCardBody>
            <CFormSelect
              size="sm"
              className="mb-3"
              aria-label="Bar chart select"
              onChange={handler}
              id="myList"
            >
              <option>Bar chart menu </option>
              <optgroup label="Numerical">
                <option id="1" value="Size of Largest Metastatic Deposit in Millimeters (mm)">
                  Size of Largest Metastatic Deposit in Millimeters (mm)
                </option>
                <option
                  id="2"
                  value="Distance of Melanoma in situ from Closest Peripheral Margin in Millimeters (mm)"
                >
                  Distance of Melanoma in situ from Closest Peripheral Margin in Millimeters (mm)
                </option>
                <option
                  id="3"
                  value="Distance of Melanoma in situ from Deep Margin in Millimeters (mm)"
                >
                  Distance of Melanoma in situ from Deep Margin in Millimeters (mm)
                </option>
                <option
                  id="4"
                  value="Distance of Invasive Melanoma from Closest Peripheral Margin in Millimeters (mm)"
                >
                  Distance of Invasive Melanoma from Closest Peripheral Margin in Millimeters (mm)
                </option>
                <option
                  id="5"
                  value="Distance of Invasive Melanoma from Deep Margin in Millimeters (mm)"
                >
                  Distance of Invasive Melanoma from Deep Margin in Millimeters (mm)
                </option>
                <option id="6" value="Number of Lymph Nodes with Tumor">
                  Number of Lymph Nodes with Tumor
                </option>
                <option id="7" value="Tumor Size">
                  Tumor Size
                </option>
              </optgroup>
              <optgroup label="Categorical">
                <option id="8" value="Extranodal Extension">
                  Extranodal Extension
                </option>
                <option id="9" value="Matted Nodes">
                  Matted Nodes
                </option>
                <option id="10" value="Number of Sentinel Nodes Examined">
                  Number of Sentinel Nodes Examined
                </option>
                <option id="11" value="Pathologic Stage Classification">
                  Pathologic Stage Classification
                </option>
                <option id="12" value="TNM Descriptors">
                  TNM Descriptors
                </option>
                <option id="13" value="Primary Tumor (pT)">
                  Primary Tumor (pT)
                </option>
                <option id="14" value="Regional Lymph Nodes (pN)">
                  Regional Lymph Nodes (pN)
                </option>
                <option id="15" value="Distant Metastasis (pM)">
                  Distant Metastasis (pM)
                </option>
                <option id="16" value="Status of Melanoma In Situ at Peripheral Margins">
                  Status of Melanoma In Situ at Peripheral Margins
                </option>
              </optgroup>
            </CFormSelect>
            <CChartBar
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                  title: {
                    display: true,
                    text: userChoice,
                  },
                },
                scales: {
                  x: { stacked: true },
                  y: { stacked: true },
                },
              }}
              data={{
                labels: XLabel,
                datasets: [
                  {
                    label: userChoice,
                    backgroundColor: ['#1d7874', '#679289', '#f4c095', '#ee2e31'],
                    data: XValue,
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Stacked Bar Chart - Age Demographics</CCardHeader>
          <CCardBody>
            <CFormSelect
              size="sm"
              className="mb-3"
              aria-label="Stacked Bar chart select"
              onChange={handlerStacked}
            >
              <option>Stacked Bar chart menu</option>
              <optgroup label="Numerical">
                <option id="1" value="Size of Largest Metastatic Deposit in Millimeters (mm)">
                  Size of Largest Metastatic Deposit in Millimeters (mm)
                </option>
                <option
                  id="2"
                  value="Distance of Melanoma in situ from Closest Peripheral Margin in Millimeters (mm)"
                >
                  Distance of Melanoma in situ from Closest Peripheral Margin in Millimeters (mm)
                </option>
                <option
                  id="3"
                  value="Distance of Melanoma in situ from Deep Margin in Millimeters (mm)"
                >
                  Distance of Melanoma in situ from Deep Margin in Millimeters (mm)
                </option>
                <option
                  id="4"
                  value="Distance of Invasive Melanoma from Closest Peripheral Margin in Millimeters (mm)"
                >
                  Distance of Invasive Melanoma from Closest Peripheral Margin in Millimeters (mm)
                </option>
                <option
                  id="5"
                  value="Distance of Invasive Melanoma from Deep Margin in Millimeters (mm)"
                >
                  Distance of Invasive Melanoma from Deep Margin in Millimeters (mm)
                </option>
                <option id="6" value="Number of Lymph Nodes with Tumor">
                  Number of Lymph Nodes with Tumor
                </option>
                <option id="7" value="Tumor Size">
                  Tumor Size
                </option>
              </optgroup>
              <optgroup label="Categorical">
                <option id="8" value="Extranodal Extension">
                  Extranodal Extension
                </option>
                <option id="9" value="Matted Nodes">
                  Matted Nodes
                </option>
                <option id="10" value="Number of Sentinel Nodes Examined">
                  Number of Sentinel Nodes Examined
                </option>
                <option id="11" value="Pathologic Stage Classification">
                  Pathologic Stage Classification
                </option>
                <option id="12" value="TNM Descriptors">
                  TNM Descriptors
                </option>
                <option id="13" value="Primary Tumor (pT)">
                  Primary Tumor (pT)
                </option>
                <option id="14" value="Regional Lymph Nodes (pN)">
                  Regional Lymph Nodes (pN)
                </option>
                <option id="15" value="Distant Metastasis (pM)">
                  Distant Metastasis (pM)
                </option>
                <option id="16" value="Status of Melanoma In Situ at Peripheral Margins">
                  Status of Melanoma In Situ at Peripheral Margins
                </option>
              </optgroup>
            </CFormSelect>
            <CChartBar
              options={{
                indexAxis: 'y',
                plugins: {
                  title: {
                    display: true,
                    text: userChoiceStack,
                  },
                },
                scales: {
                  x: { stacked: true },
                  y: { stacked: true },
                },
              }}
              data={{
                labels: [
                  '0-10',
                  '10-20',
                  '20-30',
                  '30-40',
                  '40-50',
                  '50-60',
                  '60-70',
                  '70-80',
                  '80-90',
                  '90-100',
                ],
                datasets: StackedValue,
              }}
              // labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Line Chart</CCardHeader>
          <CCardBody>
            <Multiselect
              displayValue="label"
              groupBy="cat"
              onRemove={handlerLine}
              onSelect={handlerLine}
              options={[
                {
                  cat: 'Numerical',
                  value: 'Size of Largest Metastatic Deposit in Millimeters (mm)',
                  label: 'Size of Largest Metastatic Deposit in Millimeters (mm)',
                },
                {
                  cat: 'Numerical',
                  value:
                    'Distance of Melanoma in situ from Closest Peripheral Margin in Millimeters (mm)',
                  label:
                    'Distance of Melanoma in situ from Closest Peripheral Margin in Millimeters (mm)',
                },
                {
                  cat: 'Numerical',
                  value: 'Distance of Melanoma in situ from Deep Margin in Millimeters (mm)',
                  label: 'Distance of Melanoma in situ from Deep Margin in Millimeters (mm)',
                },
                {
                  cat: 'Numerical',
                  value:
                    'Distance of Invasive Melanoma from Closest Peripheral Margin in Millimeters (mm)',
                  label:
                    'Distance of Invasive Melanoma from Closest Peripheral Margin in Millimeters (mm)',
                },
                {
                  cat: 'Numerical',
                  value: 'Distance of Invasive Melanoma from Deep Margin in Millimeters (mm)',
                  label: 'Distance of Invasive Melanoma from Deep Margin in Millimeters (mm)',
                },
                {
                  cat: 'Numerical',
                  value: 'Number of Lymph Nodes with Tumor',
                  label: 'Number of Lymph Nodes with Tumor',
                },
                {
                  cat: 'Numerical',
                  value: 'Tumor Size',
                  label: 'Tumor Size',
                },
                // {
                //   cat: 'Categorical',
                //   value: 'Extranodal Extension',
                //   label: 'Extranodal Extension',
                // },
                // {
                //   cat: 'Categorical',
                //   value: 'Matted Nodes',
                //   label: 'Matted Nodes',
                // },
                // {
                //   cat: 'Categorical',
                //   value: 'Number of Sentinel Nodes Examined',
                //   label: 'Number of Sentinel Nodes Examined',
                // },
                // {
                //   cat: 'Categorical',
                //   value: 'Pathologic Stage Classification',
                //   label: 'Pathologic Stage Classification',
                // },
                // {
                //   cat: 'Categorical',
                //   value: 'TNM Descriptors',
                //   label: 'TNM Descriptors',
                // },
                // {
                //   cat: 'Categorical',
                //   value: 'Primary Tumor (pT)',
                //   label: 'Primary Tumor (pT)',
                // },
                // {
                //   cat: 'Categorical',
                //   value: 'Regional Lymph Nodes (pN)',
                //   label: 'Regional Lymph Nodes (pN)',
                // },
                // {
                //   cat: 'Categorical',
                //   value: 'Distant Metastasis (pM)',
                //   label: 'Distant Metastasis (pM)',
                // },
                // {
                //   cat: 'Categorical',
                //   value: 'Status of Melanoma In Situ at Peripheral Margins',
                //   label: 'Status of Melanoma In Situ at Peripheral Margins',
                // },
              ]}
              showCheckbox
            />
            <CChartLine
              data={{
                labels: ['not determined', '0-5', '5-10', '10-15'],
                datasets: LineValue,
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Scatter Plot (DO NOT select the same value for both boxes)</CCardHeader>
          <CCardBody>
            <CFormSelect
              size="sm"
              className="mb-3"
              aria-label="Scatter select 1"
              onChange={handlerScatter1}
            >
              <option>Scatter Plot selection 1</option>
              <optgroup label="Numerical">
                <option id="1" value="Size of Largest Metastatic Deposit in Millimeters (mm)">
                  Size of Largest Metastatic Deposit in Millimeters (mm)
                </option>
                <option
                  id="2"
                  value="Distance of Melanoma in situ from Closest Peripheral Margin in Millimeters (mm)"
                >
                  Distance of Melanoma in situ from Closest Peripheral Margin in Millimeters (mm)
                </option>
                <option
                  id="3"
                  value="Distance of Melanoma in situ from Deep Margin in Millimeters (mm)"
                >
                  Distance of Melanoma in situ from Deep Margin in Millimeters (mm)
                </option>
                <option
                  id="4"
                  value="Distance of Invasive Melanoma from Closest Peripheral Margin in Millimeters (mm)"
                >
                  Distance of Invasive Melanoma from Closest Peripheral Margin in Millimeters (mm)
                </option>
                <option
                  id="5"
                  value="Distance of Invasive Melanoma from Deep Margin in Millimeters (mm)"
                >
                  Distance of Invasive Melanoma from Deep Margin in Millimeters (mm)
                </option>
                <option id="6" value="Number of Lymph Nodes with Tumor">
                  Number of Lymph Nodes with Tumor
                </option>
                <option id="7" value="Tumor Size">
                  Tumor Size
                </option>
              </optgroup>
            </CFormSelect>
            <CFormSelect
              size="sm"
              className="mb-3"
              aria-label="Scatter select 2"
              onChange={handlerScatter2}
            >
              <option>Scatter Plot selection 2</option>
              <optgroup label="Numerical">
                <option id="1" value="Size of Largest Metastatic Deposit in Millimeters (mm)">
                  Size of Largest Metastatic Deposit in Millimeters (mm)
                </option>
                <option
                  id="2"
                  value="Distance of Melanoma in situ from Closest Peripheral Margin in Millimeters (mm)"
                >
                  Distance of Melanoma in situ from Closest Peripheral Margin in Millimeters (mm)
                </option>
                <option
                  id="3"
                  value="Distance of Melanoma in situ from Deep Margin in Millimeters (mm)"
                >
                  Distance of Melanoma in situ from Deep Margin in Millimeters (mm)
                </option>
                <option
                  id="4"
                  value="Distance of Invasive Melanoma from Closest Peripheral Margin in Millimeters (mm)"
                >
                  Distance of Invasive Melanoma from Closest Peripheral Margin in Millimeters (mm)
                </option>
                <option
                  id="5"
                  value="Distance of Invasive Melanoma from Deep Margin in Millimeters (mm)"
                >
                  Distance of Invasive Melanoma from Deep Margin in Millimeters (mm)
                </option>
                <option id="6" value="Number of Lymph Nodes with Tumor">
                  Number of Lymph Nodes with Tumor
                </option>
                <option id="7" value="Tumor Size">
                  Tumor Size
                </option>
              </optgroup>
            </CFormSelect>
            <CChartScatter
              data={{
                datasets: [
                  {
                    label: 'Scatter Plot',
                    // label: format('{0} vs {1}', userChoiceScatter1, userChoiceScatter2),
                    data: ScatterVal,
                    backgroundColor: '#1d7874',
                  },
                ],
              }}
              options={{
                scales: {
                  x: {
                    type: 'linear',
                    position: 'bottom',
                  },
                },
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Charts
