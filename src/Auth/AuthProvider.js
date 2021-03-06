
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
  // const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE

  // const responseType = 'token id_token'
  const scope = 'read:message read:users read:current_user update:current_user_metadata openid profile email'

  const history = useHistory()

  const onRedirectCallback = state => {
    history.push(state?.returnTo || window.location.pathname)
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      // responseType={responseType}
      scope={scope}
      onRedirectCallback={onRedirectCallback}
      audience={audience}
    >
      {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWithHistory
