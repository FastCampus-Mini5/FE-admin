import axios from "axios"
import { API_URL } from './Base';

export const userListApi = async() => {
  try {
    const data = await axios.get(`${API_URL}/user/list`)
    if(data) {
      return data
    }
    else {
      throw new Error('기록 작성에 실패하셨습니다.')
    }
  } catch (error) {
    throw error
  }
}

export const userApproveApi = async() => {
  try {
    const data = await axios.get(`${API_URL}/signup/list`)
    if(data) {
      return data
    }
    else {
      throw new Error('기록 작성에 실패하셨습니다.')
    }
  } catch(error) {
    throw error
  }
}

export const vacationApi = async() => {
  try {
    const data = await axios.get(`${API_URL}/vacation/approve/list`)
    if(data) {
      return data
    } else {
      throw new Error('기록 작성에 실패하셨습니다')
    } 
  } catch(error) {
    throw(error)
  }
}

export const vacationPendingApi = async() => {
  try {
    const data = await axios.get(`${API_URL}/vacation/pending`)
    if(data) {
      return data
    } else {
      throw new Error('기록 작성에 실패하셨습니다')
    } 
  } catch(error) {
    throw(error)
  }
}

export const DutyListApi = async() => {
  try {
    const data = await axios.get(`${API_URL}/duty/approve/list`)
    if(data) {
      return data
    } else {
      throw new Error('기록 작성에 실패하셨습니다.')
    }
  } catch(error) {
    throw(error)
  }
}

export const DutyPeindingListsApi = async() => {
  try {
    const data = await axios.get(`${API_URL}/duty/pending`)
    if(data) {
      return data
    } else {
      throw new Error('기록 작성에 실패하셨습니다.')
    }
  }catch (error) {
    throw(error)
  }
}