import { FileImage, Folder2, Plus, Save } from "react-bootstrap-icons"
import TutorialTemplate from "../../templates/tutorial"
import Paragraph from '../../organisms/tutorial/atoms/paragraph'

export default function Tutorial() {
	return <TutorialTemplate>
		<h3 data-testid="greetings">Greetings</h3>
		<p>
			Hi ✋! My name is Nickolas, known as nickolasrm, the creator of this app.
		</p>
		<p>
			Today I'm gonna guide you through the
			usage of this simple, but elegant app that helps you making timelines.
		</p>
		<h3>What is a timeline?</h3>
		<p>
			A timeline is a solution for visualizing historical data in a form similar to the way we
			measure length with a ruler.
		</p>
		<h3>What is TimelineBubbles?</h3>
		<p>
			TimelineBubbles is a project I developed to reduce the amount of time I spend building
			timelines for my presentations. Most of my presentations have a historical background,
			and because of that, I wasted lots of time building timelines. I just don't want it to
			happen again.
		</p>
		<h3>Should I use this app?</h3>
		<p>
			If you're going to make a presentation or just want to create a historical representation,
			for sure, use it!
		</p>
		<h3>Usage</h3>
		<Paragraph>
			<h4>Bubbles ◯</h4>
			<p>
				A bubble is a circle positioned on the middle of the screen
				used to represent a point in the timeline marked with a representative date
				(e.g. Jun/2021)
			</p>
			<Paragraph>
				<h5>Writing</h5>
				<p>
					To change content of a bubble just select it and write something.
					You can also add multiple lines into it by pressing <i>SHIFT+ENTER.</i>
				</p>
			</Paragraph>
			<Paragraph>
				<h5>Adding a bubble</h5>
				<p>
					To add a bubble, you should first select one of them the same way you would do
					for writing, and then, just hit <i>ENTER</i>.
				</p>
				<i>
					<p>
						A bubble will be added right after
						the bubble you used to do it.
					</p>
				</i>
			</Paragraph>
			<Paragraph>
				<h5>Removing a bubble</h5>
				<p>
					To remove a bubble, select the one you want to remove, clear its contents, and then
					press <i>BACKSPACE</i>.
				</p>
				<p><i>NOTE: You cannot delete the bubble if it is the last.</i></p>
			</Paragraph>
			<Paragraph>
				<h4>Comments ▢</h4>
				A comment is a rounded rectangle connected by a vertical line to the bubble. This structure
				is where you put the description of what happened in a particular date or a representative image instead.
				<Paragraph>
					<h5>Writing</h5>
					<p>
						The same thing you did with a bubble, but now selecting the rounded rectangle.
					</p>
					<p>
						<i>
							NOTE: To add a multiline description you don't need to use SHIFT ENTER.
						</i>
					</p>
					<p>
						<i>
							NOTE 2: If you write a text larger than the bubble size, it will adapt its
							width to the content i.e. it will grow.
						</i>
					</p>
				</Paragraph>
				<Paragraph>
					<h5>Using an image</h5>
					<p>
						Instead of writing a description, you can add an image to describe your historical
						point. To do this, hover the comment with the cursor. Then, a button labelled 
						by <i>Image</i> will appear at left side of the comment. Hit this button, and then select 
						the image you want.
					</p>
					<p><i>
						NOTE: If your image is too long, you may overlap other comments, so
						be careful.
					</i></p>
					<p><i>
						NOTE 2: You can turn your comment back to text mode by hiting the button at
						the same position as the one you pressed for adding an image.
					</i></p>
				</Paragraph>
			</Paragraph>
			<Paragraph>
				<h4>File operations</h4>
				<p>
					After making your timeline, perhaps you feel like you should save it (pretty obvious).
					Also, you may need to load it, to export it, or to recreate it. All these operations are
					the file operations.
				</p>
				<Paragraph>
					<h5>New <Plus></Plus></h5>
					<p>
						To recreate your timeline from the beginning, just hit the Plus icon located at
						the floating panel located at the right bottom part of your screen.
					</p>
				</Paragraph>
				<Paragraph>
					<h5>Save <Save></Save></h5>
					<p>
						To save a timeline, just hit the Arrow Down icon located at the same
						panel as the New button.
					</p>
				</Paragraph>
				<Paragraph>
					<h5>Open <Folder2></Folder2></h5>
					<p>
						To open a previously saved timeline, just hit the Folder icon located at the same
						panel as the New button.
					</p>
				</Paragraph>
				<Paragraph>
					<h5>Print <FileImage></FileImage></h5>
					<p>
						To print your timeline to an image, just hit the Image icon located at the same panel
						as the New Button.
					</p>
				</Paragraph>
			</Paragraph>
			<Paragraph>
				<h4>Theming</h4>
				<p>
					What if all timelines have the same colors? Wouldn't it be sad? Theming
					is the way to customize your timeline.
				</p>
				<Paragraph>
					<h5>Bubble color ◯</h5>
					<p>
						To change the bubble color, just hit the leftmost color selector at the same panel
						as the New Button.
					</p>
				</Paragraph>
				<Paragraph>
					<h5>Background color ◯</h5>
					<p>
						To change the bubble color, just hit the color selector aside the bubble color selector.
					</p>
				</Paragraph>
				<p><i>
					NOTE: Don't worry about font color, it is changed to black and white automatically
					depending on the luminosity of the colors you choose.
				</i></p>
			</Paragraph>
		</Paragraph>
		<Paragraph>
			<h3>Credits</h3>
			<p>If this app helped you in some way, don't forget to&nbsp;
				<a rel="noreferrer" target="_blank" href="https://github.com/nickolasrm/TimelineBubbles">give it a star!</a>
			</p>
			<p>❤️ Made with love by nickolasrm</p>
		</Paragraph>
	</TutorialTemplate>
}