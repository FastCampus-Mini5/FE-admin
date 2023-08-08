import { ApproveSignUpApi, userApproveApi } from '@/api/api'

export const UserApproveButton = ({ email, onUserApporve, userList }) => {
  const handleClick = async () => {
    try {
      await ApproveSignUpApi(email)
      const userApporve = await userApproveApi()
      // 여기에서 승인 완료 후의 작업을 수행할 수 있습니다.

      onUserApporve(userApporve)
      userList(userApporve)
      alert('승인되었습니다.')
    } catch (error) {
      console.error('error : ' + error)
    }
  }

  return <button onClick={handleClick}>승인</button>
}
