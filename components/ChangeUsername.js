import { useMoralis } from 'react-moralis'

function ChangeUsername() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis()

  const setUserName = () => {
    const username = prompt(
      `Enter your new UserName (current: ${user.getUsername()}) `
    )
    if (!username) return
    setUserData({
      username,
    })
  }
  return (
    <div className="absolute top-5 right-5 text-sm hover:text-orange-200">
      <button disabled={isUserUpdating} onClick={setUserName}>
        Change Your Username
      </button>
    </div>
  )
}

export default ChangeUsername
