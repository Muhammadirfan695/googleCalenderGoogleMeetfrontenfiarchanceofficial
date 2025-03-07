import React, { useEffect, useRef, useState } from 'react';

function NewApi({ roomName, userName }) {
  const jitsiContainerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadJitsiScript = () => {
      return new Promise((resolve, reject) => {
        if (window.JitsiMeetExternalAPI) {
          return resolve(); // Already loaded
        }

        const script = document.createElement('script');
        script.src = 'https://meet.jit.si/external_api.js'; 
        script.async = true;
        script.onload = () => resolve();
        script.onerror = (error) => {
          console.error('Failed to load Jitsi Meet API script:', error);
          reject(new Error('Failed to load Jitsi Meet API script'));
        };
        document.head.appendChild(script); // Append script to head
      });
    };

    loadJitsiScript()
      .then(() => {
        initiateJitsi();
      })
      .catch((error) => {
        console.error('Error loading Jitsi Meet API script:', error);
        setError('Failed to load Jitsi Meet API. Please try again later.');
        setLoading(false); // Set loading to false on error
      });

    function initiateJitsi() {
      if (!window.JitsiMeetExternalAPI) {
        console.error('Jitsi Meet API is not available');
        setError('Jitsi Meet API is not available.');
        setLoading(false);
        return;
      }

      const domain = 'meet.jit.si';
      const options = {
        roomName: roomName,
        width: '100%',
        height: '100%',
        parentNode: jitsiContainerRef.current,
        userInfo: {
          displayName: userName,
        },
        interfaceConfigOverwrite: {
          SHOW_JITSI_WATERMARK: false,
        },
      };

      const api = new window.JitsiMeetExternalAPI(domain, options);

      // Set up event listeners for host controls
      api.addEventListener('videoConferenceJoined', () => {
        console.log('Local User Joined');
        setLoading(false); // Set loading to false once conference is joined
      });

      api.addEventListener('participantJoined', (event) => {
        console.log(`Participant joined: ${event.id}`);
      });

      api.addEventListener('participantLeft', (event) => {
        console.log(`Participant left: ${event.id}`);
      });

      // Handle errors from the Jitsi API
      api.addEventListener('error', (error) => {
        console.error('Jitsi API error:', error);
        setError('An error occurred with the Jitsi Meet API.');
        setLoading(false);
      });
    }

    // Cleanup function
    return () => {
      if (window.JitsiMeetExternalAPI) {
        // Optionally, dispose of the API instance if needed
      }
    };
  }, [roomName, userName]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div style={{ color: 'red' }}>{error}</div>
      ) : (
        <div ref={jitsiContainerRef} style={{ height: '100vh', width: '100%' }} />
      )}
    </div>
  );
}

export default NewApi;
