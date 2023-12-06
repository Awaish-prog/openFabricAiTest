# Set of test cases for ArtFabric AI App

## Positive Test Cases

### Test Case ID: TF001

Test Case Name: Valid Submission and Image Generation

Test Objective: Verify that the ArtFabric app can successfully generate an image based on a valid prompt.

Preconditions:

* The ArtFabric app is accessible.
* The user is logged into the application.

Test Steps:

* Enter a valid prompt in the prompt input field.
* Click on the run button.

Expected Result:

* The AI generates an image based on the provided prompt.
* The image is displayed in the image display box.
* A new item is added in the list of generated images

### Test Case ID: TF002

Test Case Name: Customize Display Functionality

Test Objective: Verify that the "Customize Display" button in the settings tab allows users to resize and relocate the prompt input, run button, and image box.

Preconditions:

* The ArtFabric app is accessible.
* The user is logged into the application.
* The settings tab is open.

Test Steps:

* Click on the "Customize Display" button in the settings tab.
* Attempt to resize the prompt input, run button, and image box to different dimensions.
* Relocate the prompt input, run button, and image box to different positions on the screen.
* Save the changes or apply the customization.

Expected Result:

* The "Customize Display" mode is activated, allowing the user to resize and relocate the prompt input, run button, and image box.
* The resizing and relocation actions are reflected on the screen.
* The changes are successfully applied and persisted when saved.

### Test Case ID: TF003

Test Case Name: Multiple Submissions with Unique Images

Test Objective: Verify that the ArtFabric app can handle multiple submissions without issues, and each submission results in a unique image.

Preconditions:

* The ArtFabric app is accessible.
* The user is logged into the application.

Test Steps:

* Input a valid prompt and submit.
* Record the generated image.
* Input a different valid prompt and submit.
* Record the newly generated image.

Expected Result:

* Each submission produces a unique image based on the provided prompt.
* The images generated from different prompts are distinct.
* No errors or unexpected behavior occur during the multiple submission process.

### Test Case ID: TF004

Test Case Name: Handling Extreme Prompt Sizes

Test Objective: Test the ArtFabric app with the smallest and largest possible prompt inputs to verify that it handles extreme cases gracefully.

Preconditions:

* The ArtFabric app is accessible.
* The user is logged into the application.

Test Steps:

* Input the smallest possible prompt (e.g., one character).
* Submit the prompt and observe the app's behavior.
* Input the largest possible prompt (e.g., a lengthy paragraph).
* Submit the prompt and observe the app's behavior.

Expected Result:

* The app gracefully handles the smallest prompt, generating an image without errors.
* The app gracefully handles the largest prompt, generating an image without crashing or exhibiting unexpected behavior.

### Test Case ID: TF005

Test Case Name: View Generated Images list

Test Objective: Verify that the ArtFabric app correctly displays a list of generated images with details.

Preconditions:

* The ArtFabric app is accessible.
* Images have been generated and are available in the list.

Test Steps:

* Open the ArtFabric App and run few prompts.

Expected Result:

* The list of generated images is displayed.
* Each item in the list shows the image, the time taken for generation, and a delete button.

### Test Case ID: TF006

Test Case Name: Delete Generated Image

Test Objective: Verify that the ArtFabric app allows users to delete a generated image from the list.

Preconditions:

* The ArtFabric app is accessible.
* Images have been generated and are available in the list.

Test Steps:

* Click on the delete button inside the image item.

Expected Result:

* The selected image is removed from the list.
* The list is updated to reflect the deletion.
* The deleted image is no longer accessible in the app.

### Test Case ID: TF007

Test Case Name: Display Time Taken

Test Objective: Verify that the ArtFabric app correctly displays the time taken for each generated image.

Preconditions:

* The ArtFabric app is accessible.
* Images have been generated and are available in the list.

Test Steps:

* Open the ArtFabric App.
* If list of images in not present then run few prompts.

Expected Result:

* Each item in the list shows the time taken for image generation.
* The time taken is accurately displayed for each image.
* The format of the displayed time is clear and understandable.

## Negative Test Cases


### Test Case ID: TF007

Test Case Name: Handling Invalid Prompt Input

Test Objective: Verify that the ArtFabric app handles an invalid prompt (e.g., empty string or non-alphanumeric characters) appropriately.

Preconditions:

* The ArtFabric app is accessible.
* The user is logged into the application.

Test Steps:

* Input an invalid prompt (e.g., empty string or non-alphanumeric characters) in the prompt input field.
* Click run button.

Expected Result:

* The app detects the invalid prompt input.
* An error message is displayed, indicating that the prompt is invalid.
* The user is prompted to enter a valid prompt.

### Test Case ID: TF008

Test Case Name: Submitting Form Without Entering a Prompt

Test Objective: Ensure that the ArtFabric app prompts the user to provide input when attempting to submit the form without entering a prompt.

Preconditions:

* The ArtFabric app is accessible.
* The user is logged into the application.

Test Steps:

* Leave the prompt input field empty.
* click run button.

Expected Result:

* The app detects the missing prompt.
* An error message is displayed, prompting the user to enter a valid prompt.
* The form submission is prevented until a valid prompt is provided.

### Test Case ID: TF009

Test Case Name: Submitting Form After Clearing Prompt Input

Test Objective: Verify that the ArtFabric app handles the scenario where a user enters a prompt, clears the prompt input, and then attempts to submit the form.

Preconditions:

* The ArtFabric app is accessible.
* The user is logged into the application.

Test Steps:

* Enter a valid prompt in the prompt input field.
* Clear the prompt input field.
* Click run button.

Expected Result:

* The app detects the cleared prompt input.
* An error message is displayed, prompting the user to enter a valid prompt.
* The form submission is prevented until a valid prompt is provided.

### Test Case ID: TF010

Test Case Name: Simultaneous Submissions by Multiple Users

Test Objective: Simulate multiple users submitting prompts simultaneously to check if the ArtFabric app handles concurrency without producing unexpected behavior.

Preconditions:

* The ArtFabric app is accessible.
* Multiple users are logged into the application.

Test Steps:

* User A and User B both navigate to the settings tab simultaneously.
* User A enters a valid prompt and submits.
* Simultaneously, User B enters a different valid prompt and submits.

Expected Result:

* Both User A and User B receive their unique images without interference.
* The app maintains data integrity, ensuring that User A's submission does not affect User B's submission and vice versa.
* No errors or unexpected behavior occur during the simultaneous submission process.

### Test Case ID: TF011

Test Case Name: Handling Image Display Box Overflow

Test Objective: Verify that the ArtFabric app handles the situation where the image display box is resized to a very small size, and the generated image cannot fit within the display box.

Preconditions:

* The ArtFabric app accessible.
* The user is logged into the application.

Test Steps:

* Click on Customize display in settings tab.
* Resize the image display box to a very small dimension.
* Enter a valid prompt and submit.

Expected Result:

* The app detects the small size of the image display box.
* The generated image does not overflow or distort outside the boundaries of the display box.
* If the image cannot fit within the small display box, a scroll or zoom functionality is provided, or an appropriate error message is displayed.

### Test Case ID: TF012

Test Case Name: Cross-Browser Compatibility

Test Objective: Test the ArtFabric app on different browsers to ensure cross-browser compatibility.

Preconditions:

* The ArtFabric app is accessible.
* The user has access to multiple web browsers.

Test Steps:

* Open the ArtFabric app in Google Chrome.
* Verify that all features and functionalities work as expected.
* Repeat the test in Mozilla Firefox.
* Repeat the test in Microsoft Edge.
* Repeat the test in Safari.
* Ensure that the app is responsive and functional across different browsers.

Expected Result:

* The ArtFabric app functions correctly on all tested browsers.
* UI elements are displayed consistently, and there are no layout issues.
* There are no browser-specific errors or unexpected behaviors.