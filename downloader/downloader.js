chrome.downloads.onChanged.addListener((downloadItem) => {
  console.log('download on change activated')
  if (
    downloadItem.state?.current === 'interrupted' &&
    downloadItem.canResume.current
  ) {
    console.log('download interrupted but can be resumed')
    chrome.downloads.resume(downloadItem.id, () => {
      console.log('resume callback')
      console.log(chrome.runtime.lastError)
    })
  }
})
