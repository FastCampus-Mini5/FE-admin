import axios from "axios"
import { useState, useEffect } from 'react'
import { Table } from 'antd'
import SelectPeriod from "./SelectPeriod"
interface DutyList {
  username: string
  email: string
  createdDate: string
  dutyDate: string
}

function DutyList() {
  const [dutyLists, setDutyLists] = useState<DutyList[]>([])

  const DutyListApi = async() => {
    try {
      const { data } = await axios.get('http://localhost:8001/api/admin/duty/approve/list')
      setDutyLists(data.response)
    } catch (error) {
      console.error('error : ' + error)
    }
  }

  useEffect(() => {
    DutyListApi()
  }, [])

  // table
  const tableItemSource = dutyLists.map((item, index) => ({
    key: index+1,
    username: item.username,
    email: item.email,
    createdDate: item.createdDate,
    dutyDate: item.dutyDate
  }))

  const tableColumns = [
    {
      title: '번호',
      dataIndex: 'key',
      key: 'key'
    },
    {
      title: '성명',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: '아이디',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: '신청일',
      dataIndex: 'createdDate',
      key: 'createdDate'
    },
    {
      title: '당직일',
      dataIndex: 'dutyDate',
      key: 'dutyDate'
    },
  ]

  return (
    <>
      <h1> 당직 리스트</h1>
      <SelectPeriod />
      <Table
        dataSource={tableItemSource}
        columns={tableColumns}
      />
    </>
  )
}

export default DutyList