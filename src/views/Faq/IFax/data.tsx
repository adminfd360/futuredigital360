import Image from "next/image";

import accountImg1 from "./assets/ifax/account/img1.webp";
import accountImg2 from "./assets/ifax/account/img2.webp";
import accountImg3 from "./assets/ifax/account/img3.webp";
import accountImg4 from "./assets/ifax/account/img4.webp";
import accountImg5 from "./assets/ifax/account/img5.webp";
import accountImg6 from "./assets/ifax/account/img6.webp";
import accountImg7 from "./assets/ifax/account/img7.webp";
import accountImg8 from "./assets/ifax/account/img8.webp";
import accountImg9 from "./assets/ifax/account/img9.webp";
import accountImg10 from "./assets/ifax/account/img10.webp";
import accountImg11 from "./assets/ifax/account/img11.webp";
import accountImg12 from "./assets/ifax/account/img12.webp";
import accountImg13 from "./assets/ifax/account/img13.webp";
import accountImg14 from "./assets/ifax/account/img14.webp";
import accountImg15 from "./assets/ifax/account/img15.webp";
import accountImg16 from "./assets/ifax/account/img16.webp";
import accountImg17 from "./assets/ifax/account/img17.webp";
import accountImg18 from "./assets/ifax/account/img18.webp";
import accountImg19 from "./assets/ifax/account/img19.webp";
import accountImg20 from "./assets/ifax/account/img20.webp";
import accountImg21 from "./assets/ifax/account/img21.webp";
import accountImg22 from "./assets/ifax/account/img22.webp";
import accountImg23 from "./assets/ifax/account/img23.webp";
import accountImg24 from "./assets/ifax/account/img24.webp";
import accountImg25 from "./assets/ifax/account/img25.webp";
import accountImg26 from "./assets/ifax/account/img26.webp";
import accountImg27 from "./assets/ifax/account/img27.webp";
import accountImg28 from "./assets/ifax/account/img28.webp";
import accountImg29 from "./assets/ifax/account/img29.webp";
import accountImg30 from "./assets/ifax/account/img30.webp";
import accountImg31 from "./assets/ifax/account/img31.webp";
import accountImg32 from "./assets/ifax/account/img32.webp";
import accountImg33 from "./assets/ifax/account/img33.webp";
import accountImg34 from "./assets/ifax/account/img34.webp";
import accountImg35 from "./assets/ifax/account/img35.webp";
import accountImg36 from "./assets/ifax/account/img36.webp";
import accountImg37 from "./assets/ifax/account/img37.webp";

import receivedImg1 from "./assets/ifax/process/img1.webp";
import receivedImg2 from "./assets/ifax/process/img2.webp";
import receivedImg3 from "./assets/ifax/process/img3.webp";
import receivedImg4 from "./assets/ifax/process/img4.webp";
import receivedImg5 from "./assets/ifax/process/img5.webp";

import sendingImg1 from "./assets/ifax/sending/img1.webp";
import sendingImg2 from "./assets/ifax/sending/img2.webp";
import sendingImg3 from "./assets/ifax/sending/img3.webp";
import sendingImg4 from "./assets/ifax/sending/img4.webp";
import sendingImg5 from "./assets/ifax/sending/img5.webp";
import sendingImg6 from "./assets/ifax/sending/img6.webp";
import sendingImg7 from "./assets/ifax/sending/img7.webp";
import sendingImg8 from "./assets/ifax/sending/img8.webp";
import sendingImg9 from "./assets/ifax/sending/img9.webp";
import sendingImg10 from "./assets/ifax/sending/img10.webp";
import sendingImg11 from "./assets/ifax/sending/img11.webp";
import sendingImg12 from "./assets/ifax/sending/img12.webp";
import sendingImg13 from "./assets/ifax/sending/img13.webp";
import sendingImg14 from "./assets/ifax/sending/img14.webp";
import sendingImg15 from "./assets/ifax/sending/img15.webp";
import sendingImg16 from "./assets/ifax/sending/img16.webp";
import sendingImg17 from "./assets/ifax/sending/img17.webp";
import sendingImg18 from "./assets/ifax/sending/img18.webp";
import sendingImg19 from "./assets/ifax/sending/img19.webp";
import sendingImg36 from "./assets/ifax/account/img36.webp";
import sendingImg37 from "./assets/ifax/account/img37.webp";

type Topic = {
  title: string;
  content: string | React.ReactNode;
};

export const accountTopics: Topic[] = [
  {
    title: "How to Set Up a Company Fax Page on iFax",
    content: (
      <>
        <p>
          As a Professional user, here’s how you can create and customize a
          dedicated fax page for your account.
        </p>
        <ul className="list-decimal pl-8">
          <li>
            Go to iFax and log in to your account. You will be directed to the
            dashboard.
          </li>
          <li>
            Click Settings. The gear icon is located in the bottom left corner.
          </li>
          <li>
            Select Your Fax Page. You will see a window where you can add or
            revise the following fax elements:
          </li>
        </ul>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg1}
          alt=""
        />
        <ul className="list-disc pl-8 mt-6">
          <li>
            Company logo – Upload a JPEG or PNG file. You may also adjust the
            size of your logo.
          </li>
          <li>
            Page Title – Edit the page’s name and include your company or name.
          </li>
          <li>Subtitle text – Add your tagline or greeting to the sender.</li>
          <li>Fax number – Type in your fax number.</li>
          <li>Company – Type the name of your company.</li>
          <li>
            Toggle option for cover page – You may include the cover page
            automatically.
            <br />
            Preview of your dedicated fax page – See how the page looks like as
            a sender.
          </li>
          <li>
            Unique URL – The generated one is based on the company’s name (e.g.,
            Amplify Ventures has this link:
            https://ifaxapp.com/fax/amplify-ventures)
          </li>
          <li>
            Free for visitors – If you select this option, senders can fax you
            at no cost. Your iFax account will be charged based on the number of
            pages.
          </li>
          <li>
            Visitors will pay – If you select this option, senders will be
            charged based on the number of pages they’ve transmitted to your fax
            page.
          </li>
          <li>
            Save button – Click this to save and apply the edits and
            customization you made.
          </li>
        </ul>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg2}
          alt=""
        />
        <ol className="list-decimal pl-8 mt-6" start={4}>
          <li>
            Once you’re satisfied with the details on your dedicated fax page,
            click Save.
          </li>
          <li>
            Copy and paste the fax page URL on your web browser to view it.
          </li>
          <li>
            Share the link with your contacts, colleagues, suppliers, vendors,
            and clients. You can even add the URL to your email signature and
            social media channels. That’s how easy it is to create a dedicated
            fax page.
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "How to Use Group Permissions",
    content: (
      <>
        <p className="text-lg font-bold">
          Assigning group permissions to a new user
        </p>
        <ul className="list-decimal pl-8 mt-6">
          <li>
            Go to the iFax web dashboard and log in to your Professional
            account.
          </li>
          <li>
            On the left panel, you will see the Settings icon on the bottom left
            of the dashboard. Click on it to open the Settings window.
          </li>
        </ul>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg3}
          alt=""
        />
        <ol className="list-decimal pl-8 mt-6" start={3}>
          <li>Click the Team and SSO tab.</li>
          <li>
            {" "}
            To add a user, click on Create New and fill out the fields with the
            required information (first and last name, email address, and job
            title).
          </li>
        </ol>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg4}
          alt=""
        />
        <ol className="list-decimal pl-8 mt-6" start={5}>
          <li>Select an assigned fax number</li>
        </ol>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg5}
          alt=""
        />
        <ol className="list-decimal pl-8 mt-6" start={6}>
          <li>
            Click on Select Group and choose the appropriate option. We’ll
            discuss this further in the next section.
          </li>
        </ol>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg6}
          alt=""
        />
        <ol className="list-decimal pl-8 mt-6" start={7}>
          <li>Click Save.</li>
        </ol>
        <p className="text-lg font-bold mt-6">Assigning a default group</p>
        <p className="mt-6">
          Simply click on Select Group and choose from the drop-down list of
          default groups.
          <br />
          They already contain a fixed number of permissions that are
          appropriate for the title. On the dashboard, you can see the number of
          permissions for each default group and the number of users.
        </p>
        <ul className="list-disc pl-8 mt-2">
          <li>Admin – 22 permissions</li>
          <li>Manager – 17 permissions</li>
          <li>Sender – 4 permissions</li>
          <li>Receiver – 4 permissions</li>
          <li>Sender+Receiver – 4 permissions</li>
        </ul>
        <p className="mt-6">Note: These default groups cannot be edited.</p>
        <p className="text-lg font-bold mt-6">Creating New Group Permissions</p>
        <p className="mt-6">
          If you think a team member or role requires a custom set of
          permissions, it’s best to create a new group.
          <br />
          Here’s how to do it:
        </p>
        <ol className="list-decimal pl-8">
          <li>Click the New Group button at the bottom right.</li>
        </ol>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg7}
          alt=""
        />
        <ol className="list-decimal pl-8" start={2}>
          <li>Type in the new group name in the appropriate field.</li>
          <li>
            Tick the boxes for the permissions you want to include under each
            category (Account Management, Other Features, Inbound Workflow,
            Outbound).
          </li>
          <li>Click Save.</li>
        </ol>
        <p className="text-lg font-bold mt-6">Assigning admin access</p>
        <p className="mt-6">
          An admin has the highest number of permissions and unlimited access to
          reports and documents. This user has the following privileges and
          more:
        </p>
        <ul className="list-disc pl-8">
          <li>Finance and plan management</li>
          <li>Add port or change fax numbers</li>
          <li>View faxes sent by other users</li>
          <li>Delete faxes</li>
          <li>Email to fax</li>
        </ul>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg8}
          alt=""
        />
        <p className="mt-6">
          When you click on Admin under the Account Management drop-down menu,
          the system will automatically tick the other boxes that are
          appropriate. As you can see, an admin has almost complete access to
          all features and files.
        </p>
        <p>
          Note: If you tick the Disable App Access (Web/Mobile) option, the user
          can restrict access to the iFax web browser or mobile app.
        </p>
      </>
    ),
  },
  {
    title: "How to edit or remove a team member from my fax account?",
    content: (
      <>
        <p>
          1. Navigate to Team from the left panel of your dashboard to make
          changes to team members in your fax account.
        </p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg9}
          alt=""
        />
        <p className="mt-6">
          2. Under the Users tab, click on the three dots on the right of the
          user’s name.{" "}
        </p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg10}
          alt=""
        />
        <p className="mt-6">
          3. Select from the options: Edit if it’s necessary to modify the
          user’s information or Delete if you need to remove the team member
          from your account.
        </p>
      </>
    ),
  },
  {
    title: "How to add team members?",
    content: (
      <>
        <ul className="list-decimal pl-8">
          <li>
            On the dashboard, navigate to the left panel, then select Team.
          </li>
          <li>
            A window will pop up where you can see the settings for configuring
            your team under Team & SSO.
          </li>
          <li>
            Click on the Add user to add new members to your team. You can also
            select Add 365 user for Microsoft accounts.
          </li>
        </ul>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg11}
          alt=""
        />
        <ol className="list-decimal pl-8 mt-6" start={4}>
          <li>
            Fill in the required details, such as the email address, name, job
            title, and fax number access.
          </li>
          <li>
            {" "}
            Assign permission for the team member by checking the boxes or
            selecting a group for the user. Click Save.
          </li>
        </ol>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg12}
          alt=""
        />
        <p className="mt-6">
          You now added a user for your fax account. The new member will receive
          an email to activate their iFax account and access the shared faxes
          with your team. Remember that if you need to add more users to your
          team, you must edit your plan or add licenses for only $16.66 per
          month for every user.
        </p>
      </>
    ),
  },
  {
    title: "How to Create Smart Folders on iFax and Sort Your Faxes",
    content: (
      <>
        <p>
          1. On your dashboard, click Folder located at the left side of the
          screen.
        </p>
        <p>2. Click New Folder.</p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg13}
          alt=""
        />
        <p className="mt-6">3. Type in the folder name.</p>
        <p>4. Click Save.</p>
        <p className="mt-6">
          Once the folder has been successfully created, you should be able to
          find it on the Folder section on your dashboard.
          <br />
          Now that your smart folder is ready, you can begin sorting out your
          faxes. You can move your faxes from your dashboard or email inbox to
          your smart folder.
          <br />
          There are two ways that you can go about it. Let’s walk you through
          each one:
        </p>
        <p className="mt-6 font-bold text-lg">Drag-and-drop method</p>
        <p className="mt-3">1. Select the fax you wish to move.</p>
        <p>2. Simply drag and drop the fax into the smart folder.</p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg14}
          alt=""
        />
        <p className="mt-6">
          3. A pop-up message will appear. Click Move Here to confirm the
          transfer.
        </p>
        <p className="mt-6 font-bold text-lg">Manual method</p>
        <p className="mt-6">
          1. Select the fax you want to transfer to the smart folder.
        </p>
        <p>
          2. Click the hamburger icon (three dots) on the right side of the fax
          transmission.
        </p>
        <p>3. Click Move to Folder.</p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg15}
          alt=""
        />
        <p className="mt-6">
          4. Select the smart folder where you wish to move the fax to.
        </p>
        <p>5. Click Move Here.</p>
      </>
    ),
  },
  {
    title: "How to Enable Fax Notifications on iFax",
    content: (
      <>
        <p>
          To enable fax notifications, you will need to set up your fax service
          to send alerts to your preferred device or email address. Here’s how
          to do it on iFax:
        </p>
        <p>1. Log in to your account.</p>
        <p>
          2. On your dashboard, go to Settings by clicking the gear button on
          your screen’s bottom left side.
        </p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg16}
          alt=""
        />
        <p className="mt-6">
          3. Go to Notifications, then proceed to Email Notifications.
        </p>
        <p>
          4. To enable notifications, simply select how you wish to be notified.
          You can select between email and push notifications. You may also
          choose both to ensure you never miss a fax.
        </p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg17}
          alt=""
        />
        <p className="mt-6">
          5. If you want to receive a copy of your fax in your email, enable
          Attach Fax.
        </p>
        <p>6. Don’t forget to click Save to lock in all your changes.</p>
        <p>
          Once you have set up and configured your notifications, you should be
          able to receive a real-time update every time you receive a
          transmission. In the same vein, this feature also allows you to keep
          track of outgoing faxes. You’ll receive a confirmation email about
          whether your message was successfully sent or not.
        </p>
      </>
    ),
  },
  {
    title: "How to setup your timezone",
    content: (
      <>
        <p>
          Setting the correct time zone can help ensure that your faxes will be
          delivered promptly. The time zone you selected will also affect the
          time and date shown on your transmission receipts. Therefore, you must
          configure this setting correctly.
        </p>
        <p>To do so, you will need to:</p>
        <ul className="list-decimal pl-8">
          <li>Go to your account settings.</li>
          <li>Click General, then select Preferences.</li>
        </ul>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg18}
          alt=""
        />
        <p className="mt-6">
          3. Under Time Zone, scroll through the menu, then select your location
          or country.
        </p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg19}
          alt=""
        />
      </>
    ),
  },
  {
    title: "How to enable or disable the success message pop-up",
    content: (
      <>
        <p>
          By default, you will see fireworks right after sending a fax message.
          If you want to disable this graphical notification, simply go to your
          account settings and follow these steps:
        </p>
        <p>1. Navigate to General {">"} Preferences</p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg20}
          alt=""
        />
        <p className="mt-6">2. Scroll down to Fireworks.</p>
        <p>
          3. Click the toggle switch next to Display fireworks after fax sent.
        </p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg21}
          alt=""
        />
      </>
    ),
  },
  {
    title: "How to set up faxes for automatic deletion",
    content: (
      <>
        <p>
          iFax has a setting that allows you to automatically delete outgoing
          and incoming faxes based on a set interval.
        </p>
        <p>Here’s how you can get it done:</p>
        <p>
          1. Go to your account settings by clicking the gear icon from the left
          panel of your dashboard.
        </p>
        <p>2. Select General {">"} Preferences.</p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg22}
          alt=""
        />
        <p className="mt-6">3. Scroll down to Auto-Delete.</p>
        <p>
          4. From there, set your preferred intervals for auto-deleting sent and
          received faxes.
        </p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg23}
          alt=""
        />
        <p className="mt-6">
          5. You can set the interval to 1 day, 7 days, 30 days, 90 days, or
          Never. The changes made will be automatically applied to your account.
        </p>
      </>
    ),
  },
  {
    title: "How to always include a transmission receipt",
    content: (
      <>
        <p>
          A transmission receipt serves as proof that your fax has been
          successfully delivered. With iFax, you can include or exclude a copy
          of the transmission receipt in the email confirmation message.
        </p>
        <p>Here’s how it works:</p>
        <p>1. Go to your account settings.</p>
        <p>2. Navigate to General {">"} Preferences.</p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg24}
          alt=""
        />
        <p className="mt-6">3. Go to the section for Fax Content.</p>
        <p>4. Click the toggle switch next to Include transmission receipt.</p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg25}
          alt=""
        />
      </>
    ),
  },
  {
    title: "How to Add a Custom Fax Cover Sheet on iFax",
    content: (
      <>
        <p>
          Customizing your fax cover pages is as easy as following these steps:
        </p>
        <p>
          1. Go to your iFax web dashboard. If you still need to start using our
          online fax service, you can sign up for a free account or get a 7-day
          trial of our Professional plan.
        </p>
        <p>2. Click the cog icon at the bottom-left menu.</p>
        <p>
          3. Navigate to General {">"} Preferences {">"} Fax Content.
        </p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg26}
          alt=""
        />
        <p className="mt-6">
          4. Click the toggle button next to the Cover Page option.
        </p>
        <p>5. Click Customize Cover Page to load the cover page editor.</p>
        <p>
          6. Scroll through the available templates and select the one that you
          like.
        </p>
        <p>
          7. Preformat the fields to include your company name, contact number,
          business address, etc.
        </p>
        <p>
          8. To add a logo, click the three dots icon at the top-right corner of
          the cover page. Click Add Logo.
        </p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg27}
          alt=""
        />
      </>
    ),
  },
  {
    title: "How to port over an existing number",
    content: (
      <>
        <p>1. Log-in to iFax</p>
        <p>2. Click on “add” next to the Fax Numbers</p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg28}
          alt=""
        />
        <p className="mt-6">3. Select the “Port Existing Number” tab</p>
        <p>4. Fill out Porting and Billing Details</p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg29}
          alt=""
        />
        <p className="mt-6">5. Upload copy of most recent bill</p>
        <p>6. Click on Submit</p>
        <p>
          The port over process from your current service provider typically
          takes 5-7 business days. During this period you will still be able to
          receive faxes under your current provider as it hasn’t been turned
          over to our system yet. Upon approval of request, an FOC date will be
          provided and can be viewed in the Fax number settings during which
          your number will be ported over to iFax. After this date, you will be
          able to receive faxes in iFax through your existing fax number.
        </p>
      </>
    ),
  },
  {
    title: "How to port a new fax number",
    content: (
      <>
        <p>1. Log-in to iFax</p>
        <p>2. Click on “add” next to the Fax Numbers</p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg30}
          alt=""
        />
        <p className="mt-6">
          3. Select the Country Code, Area Code, and Fax Number of your
          preference
        </p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg31}
          alt=""
        />
        <p className="mt-6">4. Click on “Add Number”</p>
        <p>You are now able to receive faxes through this number</p>
      </>
    ),
  },
  {
    title: "How to configure SSO in iFax",
    content: (
      <>
        <p>
          You can only set up SSO for your team if you have administrator
          access. Once you have set up your IdP, follow these steps to configure
          your iFax account for single sign-on:
        </p>
        <p>1. Log in to your iFax account. Go to Settings {">"} Team & SSO.</p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg32}
          alt=""
        />
        <p className="mt-6">
          2. Under Team & SSO, go to the SSO tab and activate Single Sign-on.
        </p>
        <p>
          3. To configure SAML, get the details you need to provide from your
          IdP, like Google, Okta, and Azure. Enter the Login URL, SMAL
          certificate, and logout URL. Click Save.
        </p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg33}
          alt=""
        />
        <p className="mt-6">
          4. If you enter valid credentials, a snackbar will appear that says
          SSO configuration is saved. If your details are invalid, an error
          message will appear.
        </p>
        <p>
          5. When you successfully configured SSO to your account, your team
          will receive an email notification that SSO has been enabled.
        </p>
      </>
    ),
  },
  {
    title: "How to Bulk Upload Contacts for Fax Broadcasts",
    content: (
      <>
        <p>
          With iFax, you can add contacts manually or import them in bulk. Let’s
          say you have a long list of campaign subscribers. To add them to your
          broadcast list in one go, you need to follow these steps:
        </p>
        <p>
          1. Log in to your iFax web account. If you are not yet an iFax user,
          simply sign up for free or pay for a subscription.
        </p>
        <p>2. On your dashboard, go to Tools {">"} Broadcast Fax.</p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg34}
          alt=""
        />
        <p className="mt-6">
          3. On the lower right of the screen, click New Broadcast List, then
          select Upload CSV.
        </p>
        <p>
          4. Click Choose File and select the CSV file you want to upload from
          your local folder. Select Import.
        </p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg35}
          alt=""
        />
        <p className="mt-6">
          5. Label your new broadcast list. Review the data you uploaded. Our
          import tool will automatically check if the fax numbers listed are
          valid.
        </p>
        <p>
          6. If there are any invalid numbers, you must update them manually
          before you can click Save.
        </p>
        <p>A few things to remember:</p>
        <ul className="list-disc pl-8">
          <li>
            CSV stands for comma-separated values. You can export this file from
            document applications that can store data in tabular form, like
            Microsoft Excel, Google Sheets, and LibreOffice Calc. You can only
            upload one CSV file at a time.
          </li>
          <li>
            You should always include the area code, three-digit prefix, and at
            least four unique digits when listing fax numbers.
          </li>
          <li>
            If you are fax blasting to an international audience, always include
            the country codes without the +. Follow this format: 1 (314)
            123-4567
          </li>
        </ul>
        <p className="mt-6">
          When importing contacts in bulk, you must ensure that the CSV fields
          are in the correct order starting with the fax number, first name, and
          last name. If you want to add custom fields for email addresses and
          phone numbers, you must place them after the last name.
        </p>
        <p>
          Note that you can only add up to 10 custom fields. Otherwise, the
          exceeding fields won’t show up, and you’ll have to redo your upload.
        </p>
      </>
    ),
  },
  {
    title: "How to add a customs field to a broadcast list",
    content: (
      <>
        <p>With custom fields can create broadcast lists with these fields:</p>
        <ul className="list-disc pl-8">
          <li>first name</li>
          <li>last name</li>
          <li>fax number</li>
          <li>location</li>
          <li>age</li>
          <li>gender</li>
        </ul>
        <p className="mt-6">Here’s how to do it:</p>
        <p>1. Go to Tools {">"} Broadcast Fax.</p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg36}
          alt=""
        />
        <p className="mt-6">
          2. Click New Broadcast List, then choose between the two available
          options. You can import a CSV file of your existing contacts or create
          a new list from scratch.
        </p>
        <p>
          3. Label your new broadcast list and fill out the standard fields with
          the required details.
        </p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={accountImg37}
          alt=""
        />
        <p className="mt-6">
          4. Click Add Field. Enter the information that you’d like to include.
          You can enter specific details like email address, location, or
          organization.
        </p>
        <p>5. Click Save to apply the changes.</p>
        <p>
          Note that this feature is only available if you subscribe to iFax Pro.
        </p>
      </>
    ),
  },
];

export const navigationTopics: Topic[] = [
  {
    title: "How to export reports",
    content: (
      <>
        <p>
          <strong>Reports</strong> provide insights on your team’s online fax
          usage, particularly the volume of incoming and outgoing faxes. You can
          also check the online fax usage of each user. Simply choose the email
          address associated with their iFax account.
        </p>
        <p>
          You can generate and export reports based on the following parameters:
        </p>
        <ul className="list-disc pl-8">
          <li>Any direction</li>
          <li>Any status</li>
          <li>
            Custom date (any time, today, yesterday, last 7, 28, and 90 days)
          </li>
          <li>By day, week, month, or year</li>
        </ul>
        <video
          src="/videos/ifax/navigation/ifax-navigation-video.mp4"
          autoPlay
          muted
          loop
          className="w-full h-auto mt-6 max-w-[80%] m-auto"
        ></video>
        <p className="mt-6">
          iFax allows you to export fax data as a CSV file. This format is
          compatible with Microsoft Excel and Google Sheets.
        </p>
        <p>To access Reports:</p>
        <ul className="list-decimal	pl-8">
          <li>
            Open the main dashboard and click the Reports under Tools in the
            left panel.
          </li>
          <li>
            You will see the graph indicating the number of faxes sent in a
            specific period.
          </li>
          <li>
            Click the Export button in the upper-right corner of the dashboard.
            You will receive the CSV file in your device.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "How to Navigate and Use the iFax Dashboard",
    content: (
      <>
        <ul className="list-disc pl-8">
          <li>
            If you’re looking for a specific fax, use the search bar at the top
            and type the name of a sender, recipient, and fax number. You may
            also toggle on “Search inside faxes” to find documents with specific
            terms.
          </li>
          <li>
            Filter faxes sent and received by method or user, direction, status,
            or time frame
          </li>
          <li>
            Browse through the pages of faxes by going through the displayed
            number of faxes in the screen at the bottom
          </li>
          <li>Download a spreadsheet log of all faxes received and sent</li>
          <li>Each row represents a fax received or sent</li>
          <li>
            The arrow next to the name under the “To” column indicates whether
            it’s inbound or outbound. If it’s pointing North-East = Outbound,
            South-West = Inbound
          </li>
          <li>Click on the negative spaces within the row to view the fax</li>
          <li>
            Select the name of a contact to review a log of all related faxes
            for that contact
          </li>
          <li>Add contact details for numbers with no contact assigned yet</li>
          <li>Assign faxes to user(s) for their processing</li>
          <li>Review the status of the faxes sent and received</li>
          <li>
            Update status of fax to Done to change it to the latest status
          </li>
          <li>Feel free to move the faxes to any folders you’ve created</li>
          <li>
            Clicking on the kebab icon at the most right of each row will give
            you options on what action to take with each fax: Mark as Done/Not
            Done, pull a Transmission Receipt, Annotate or eSign, Reply to
            Sender, Forward as New Fax, Mark as Unread, Block Sender, or Delete
          </li>
          <li>
            To send a fax, click the New fax button on the screen’s bottom-right
            corner.
          </li>
        </ul>
        <video
          src="/videos/ifax/navigation/2.mp4"
          autoPlay
          muted
          loop
          className="w-full h-auto mt-6 max-w-[80%] m-auto "
        ></video>
        <p className="mt-6">
          {" "}
          On the menu on the left hand side of the screen:
        </p>
        <ul className="list-disc pl-8 ">
          <li>
            Click the Inbox on the right-hand to view incoming and outgoing
            faxes.
          </li>
          <li>
            To view the faxes you have opened and marked confirmed, click the
            Done folder.
          </li>
          <li>
            The Folders contain labeled files connected to the cloud storage for
            syncing and backup. When you click the kebab icon, a sub-menu will
            appear prompting you to create a folder or sync files to Google
            Drive, OneDrive, and Dropbox.
          </li>
          <li>
            The Team Member option lets you add new users, create user group
            permissions, and activate single sign-on for team members.
          </li>
          <li>
            Manage your fax numbers or assign team members with the Fax Numbers
            option.
          </li>
          <li>Access and manage your contact lists.</li>
          <li>
            Go to Reports & Activity to get a visualization of faxes sent and
            received over time.
          </li>
        </ul>
        <video
          src="/videos/ifax/navigation/3.mp4"
          autoPlay
          muted
          loop
          className="w-full h-auto mt-6 max-w-[80%] m-auto"
        ></video>
        <ul className="list-disc pl-8 mt-6">
          <li>
            Click on the “i” icon next to Email to Fax to see the four-step
            process on how to send faxes from your email
          </li>
          <li>
            Use the Broadcast Fax to send the same fax in bulk to a list of
            accounts
          </li>
          <li>Check available Integrations & API to connect with iFax</li>
          <li>
            Set-up Your Fax Page so anyone can send you a fax without having
            access to a physical fax machine
          </li>
          <li>Review our Pricing Tiers</li>
          <li>Reach out to our Support Team</li>
          <li>View your allowance used along with your subscription plan</li>
          <li>Click on the gear icon to access your account settings</li>
        </ul>
      </>
    ),
  },
];

export const receivedTopics: Topic[] = [
  {
    title: "How to organize faxes into your folders",
    content: (
      <>
        <p>
          Set-up your smart folders (go to our article on How to Create Smart
          Folders to learn how to do this)
        </p>
        <p>
          In your dashboard once you’ve chosen the fax you want to move into a
          folder, click-hold-and drag the fax towards the Folders section of the
          tool
        </p>
        <p>Drop the fax into the designated folder you want it to be in</p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={receivedImg1}
          alt=""
        />
      </>
    ),
  },
  {
    title:
      "How to delete, share, forward, print, download, or request for an e-signature for a fax",
    content: (
      <>
        <p>1. On your dashboard or inbox open a fax you received</p>
        <p>2. Hover above the fax for the following options:</p>
        <ul className="list-decimal pl-8">
          <li>Delete Fax</li>
          <li>Share Fax</li>
          <li>Forward as New Fax</li>
          <li>Request eSignature</li>
          <li>Print</li>
          <li>Download PDF</li>
        </ul>
        <video
          src="/videos/ifax/process/video1.mp4"
          autoPlay
          muted
          loop
          className="w-full h-auto mt-6 max-w-[80%] m-auto"
        ></video>
        <p className="mt-6">
          3. Select the action you want to take with your fax.
        </p>
      </>
    ),
  },
  {
    title: "How to block fax numbers on iFax",
    content: (
      <>
        <ul className="list-decimal pl-8">
          <li>Go to your dashboard.</li>
          <li>
            Click on the hamburger icon (three dots) on the right side of the
            transmission.
          </li>
          <li>Select Block Sender.</li>
          <li>
            You’ll see a popup notification on the bottom of your screen when
            you’ve successfully blocked a fax number.
          </li>
        </ul>

        <p className="mt-6">
          You can also view and keep track of all the numbers you’ve blocked.
          You can do so by following these steps:
        </p>
        <ul className="list-decimal pl-8">
          <li>
            On your dashboard, go to Settings by clicking the gear icon on the
            bottom left side of the screen.
          </li>
          <li>On General, select Blocked Numbers.</li>
        </ul>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={receivedImg2}
          alt=""
        />
        <p className="mt-6">
          3. You may also unblock numbers by clicking the delete button (trash
          bin icon) on the right side of the number.
        </p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={receivedImg3}
          alt=""
        />
        <p className="mt-6">
          Blocking numbers on iFax literally takes less than five minutes to do.
          So next time you receive a junk fax, block the number right away.
        </p>
      </>
    ),
  },
  {
    title: "How to Use Fax OCR on iFax",
    content: (
      <>
        <p>
          OCR for online faxing allows users to scan, transcribe, and convert
          documents quickly and effortlessly. The character recognition feature
          on iFax is intuitive and automated. Follow the steps below to start
          using OCR on iFax:
        </p>
        <ul className="list-decimal pl-8">
          <li>
            Go to ifaxapp.com and sign up for a new account. Log in if you
            already have an existing account.
          </li>
          <li>
            Enter the iFax dashboard and click Settings on the dashboard’s
            left-hand side.
          </li>
          <li>
            Under the General tab, click OCR & Data Export. This submenu will
            let you edit settings related to the iFax OCR functionality.{" "}
          </li>
        </ul>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={receivedImg4}
          alt=""
        />
        <p className="mt-6">
          4. You may toggle the automatic conversion of images from new faxes.{" "}
        </p>
        <p>5. You can convert existing faxes to searchable text.</p>
        <p>
          6. It’s also possible to create custom fields for names, dates, and
          other information.
        </p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={receivedImg5}
          alt=""
        />
        <p className="mt-6">
          Note that automatic conversion from fax images to searchable text
          comes at an additional cost. Similarly, activating OCR for existing
          fax images comes with a one-time fee.
        </p>
        <p>
          Once you’ve activated the fax OCR feature, you can toggle the search
          button on your dashboard to index converted searchable texts. This
          option will make it easier to locate and sort fax images that iFax has
          already scanned and converted.
        </p>
      </>
    ),
  },
];

export const sendingTopics: Topic[] = [
  {
    title: "How to Bulk Upload Contacts for Fax Broadcasts",
    content: (
      <>
        <p>
          With iFax, you can add contacts manually or import them in bulk. Let’s
          say you have a long list of campaign subscribers. To add them to your
          broadcast list in one go, you need to follow these steps:
        </p>
        <p>
          1. Log in to your iFax web account. If you are not yet an iFax user,
          simply sign up for free or pay for a subscription.
        </p>
        <p>2. On your dashboard, go to Tools {">"} Broadcast Fax.</p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={sendingImg1}
          alt=""
        />
        <p className="mt-6">
          3. On the lower right of the screen, click New Broadcast List, then
          select Upload CSV.
        </p>
        <p>
          4. Click Choose File and select the CSV file you want to upload from
          your local folder. Select Import.
        </p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={sendingImg2}
          alt=""
        />
        <p className="mt-6">
          5. Label your new broadcast list. Review the data you uploaded. Our
          import tool will automatically check if the fax numbers listed are
          valid.
        </p>
        <p>
          6. If there are any invalid numbers, you must update them manually
          before you can click Save.
        </p>
        <p>A few things to remember:</p>
        <ul className="list-disc pl-8">
          <li>
            CSV stands for comma-separated values. You can export this file from
            document applications that can store data in tabular form, like
            Microsoft Excel, Google Sheets, and LibreOffice Calc. You can only
            upload one CSV file at a time.
          </li>
          <li>
            You should always include the area code, three-digit prefix, and at
            least four unique digits when listing fax numbers.
          </li>
          <li>
            If you are fax blasting to an international audience, always include
            the country codes without the +. Follow this format: 1 (314)
            123-4567
          </li>
        </ul>
        <p className="mt-6">
          When importing contacts in bulk, you must ensure that the CSV fields
          are in the correct order starting with the fax number, first name, and
          last name. If you want to add custom fields for email addresses and
          phone numbers, you must place them after the last name.
        </p>
        <p>
          Note that you can only add up to 10 custom fields. Otherwise, the
          exceeding fields won’t show up, and you’ll have to redo your upload.
        </p>
      </>
    ),
  },
  {
    title: "How to cancel or reschedule a fax broadcast",
    content: (
      <>
        <p>
          Suppose you have forgotten something and want to make changes to your
          scheduled fax broadcast. To reschedule or cancel the fax broadcast,
          here’s how to do it:
        </p>
        <ul className="list-decimal pl-8">
          <li>View your faxes on your dashboard.</li>
          <li>Hover over the scheduled fax broadcast you wish to revise.</li>
          <li>
            Select your preferred action: reschedule, cancel, or send now.
          </li>
        </ul>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={sendingImg3}
          alt=""
        />
        <p className="mt-6">
          How do you know that you’ve successfully scheduled or rescheduled a
          fax? A snack bar will appear, confirming that your action has been
          completed. Whether it’s a single standard fax or bulk fax broadcast,
          iFax makes sure that your documents get to the right people without
          any delay.
        </p>
      </>
    ),
  },
  {
    title: "How to reschedule a fax",
    content: (
      <>
        <p>Go to your dashboard, where you will see your scheduled faxes.</p>
        <p>
          Click on the three vertical dots beside your scheduled faxes. You can
          choose from three options: Send now, Reschedule, or Cancel scheduling.
        </p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={sendingImg4}
          alt=""
        />
        <p className="mt-6">1. Reschedule a fax</p>
        <p className="mt-6">
          To send your fax at another time and date, select Reschedule. This
          action will open the same window that appeared when you initially
          scheduled your fax. Click Save after selecting a new time and date.
        </p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={sendingImg5}
          alt=""
        />
        <p className="mt-6">2. Send a fax now</p>
        <p className="mt-6">
          If you choose to Send now, your fax broadcast will be sent to your
          recipients immediately after you click Yes.
        </p>
        <p>3. Cancel a scheduled fax</p>
        <p className="mt-6">
          To stop the transmission of a fax that has already been scheduled,
          select Cancel schedule. Then, click Yes.
        </p>
      </>
    ),
  },
  {
    title: "How to schedule a fax",
    content: (
      <>
        <p>
          1. On your dashboard, click the New Fax button on the bottom right.
        </p>
        <p>
          2. A pop-out window will appear for your New Fax. Select the
          recipient’s fax number from your contact list. You can select multiple
          recipients for the same fax.
        </p>
        <p>
          3. Compose your message and attach any necessary documents. Then,
          click on the drop-down arrow beside Delivery time, which you can see
          at the top of your fax.
        </p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={sendingImg6}
          alt=""
        />
        <p className="mt-6">
          4. Select Scheduled send, then enter the date and time you would like
          your fax sent.
        </p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={sendingImg7}
          alt=""
        />
        <p className="mt-6">
          5. Once you have selected a delivery time for your fax, click on the
          Scheduled send button at the bottom of your fax.
        </p>
        <p>
          6. You will be redirected to your dashboard, where you can see the
          status of your faxes. Now, you can rest easy knowing that your
          important documents are on their way to the right people.
        </p>
      </>
    ),
  },
  {
    title: "How to Send a One-Time Fax Link via Email CC",
    content: (
      <>
        <p>1. Click on Send Fax</p>
        <p>2. Click on the kebab icon at the top right corner</p>
        <p>3. Select CC via email</p>
        <p>4. Add the email that needs to be CC’d into the fax</p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={sendingImg8}
          alt=""
        />
        <p className="mt-6">
          5. After uploading your document for faxing and updating the cover
          page, click on send
        </p>
      </>
    ),
  },
  {
    title: "How to add custom fields to PDF attachments",
    content: (
      <>
        <p>
          With iFax, you can attach documents in different formats, including
          PDFs. You can personalize these attachments by adding fax broadcast
          fields. For example, if you’d like to insert your recipient’s email
          information from the broadcast list into your PDF, all you need to do
          is add the email field. There’s no need to type the actual email
          address.
        </p>
        <p>Here’s how it works:</p>
        <p>1. Go to Tools {">"} Broadcast Fax and select an existing list.</p>
        <p>
          2. Click Add Field to include a new row of information for each
          contact.
        </p>
        <p>
          3. Populate each field based on the details provided by your
          recipient.
        </p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={sendingImg9}
          alt=""
        />
        <p className="mt-6">
          4. Click Save, then hover over the updated list and click Send Fax.
        </p>
        <p>5. Fill out the cover page with the required information.</p>
        <p>6. Click the clip icon to add an attachment.</p>
        <p>7. Select the PDF file that you wish to attach.</p>
        <p>8. Drag and drop the broadcast list fields into the document.</p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={sendingImg10}
          alt=""
        />
        <p className="mt-6">9. Click Save, then proceed to send your fax.</p>
      </>
    ),
  },
  {
    title: "How to add a customs field to a broadcast list",
    content: (
      <>
        <p>With custom fields can create broadcast lists with these fields:</p>
        <ul className="list-disc pl-8">
          <li>first name</li>
          <li>last name</li>
          <li>fax number</li>
          <li>location</li>
          <li>age</li>
          <li>gender</li>
        </ul>
        <p className="mt-6">Here’s how to do it:</p>
        <p>1. Go to Tools {">"} Broadcast Fax.</p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={sendingImg36}
          alt=""
        />
        <p className="mt-6">
          2. Click New Broadcast List, then choose between the two available
          options. You can import a CSV file of your existing contacts or create
          a new list from scratch.
        </p>
        <p>
          3. Label your new broadcast list and fill out the standard fields with
          the required details.
        </p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={sendingImg37}
          alt=""
        />
        <p className="mt-6">
          4. Click Add Field. Enter the information that you’d like to include.
          You can enter specific details like email address, location, or
          organization.
        </p>
        <p>5. Click Save to apply the changes.</p>
        <p>
          Note that this feature is only available if you subscribe to iFax Pro.
        </p>
      </>
    ),
  },
  {
    title:
      "How to Send a Fax to multiple recipients in bulk through Broadcast Fax",
    content: (
      <>
        <p>1. From the left menu, go to Tools {">"} Broadcast Fax.</p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={sendingImg11}
          alt=""
        />
        <p className="mt-6">2. Create a broadcast list</p>
        <p>3. Select a broadcast list.</p>
        <p>
          4. Hover over the broadcast list, then click the Send Fax button right
          next to it.
        </p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={sendingImg12}
          alt=""
        />
        <p className="mt-6">5. Compose a fax blast message.</p>
        <p>
          6. Fill out the required fields in the fax cover sheet, attach the
          documents for mass faxing, and click Send.
        </p>
      </>
    ),
  },
  {
    title: "How to Send a Fax from your Email",
    content: (
      <>
        <p>
          1. Provided that you already use iFax as your online fax service and
          you use the Pro tier, here’s how to use the email-to-fax feature:
        </p>
        <p>2. Open your email Gmail, Outlook, or Yahoo account.</p>
        <p>
          3. Compose a new email. In the “To” field, put “send@ifaxapp.com.”
        </p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={sendingImg13}
          alt=""
        />
        <p className="mt-6">
          4. In the subject field, fill in the fax number of the recipient. Do
          not include any spaces and dashes.
        </p>
        <p>5. Enter details in the message section.</p>
        <p>
          6. Attach files like PDFs and Word documents, just like you would in a
          regular email.
        </p>
        <p>
          7. Click Send. You’ll get a notification once the fax is delivered
          successfully.
        </p>
        <p>Note: this feature is also HIPAA compliant.</p>
      </>
    ),
  },
  {
    title: "How to set the default paper size",
    content: (
      <>
        <p>
          1. After clicking Compose Fax, click the three dots icon at the
          top-right corner of the compose window.
        </p>
        <p>2. Select Page Size.</p>
        <p>3. Set the paper size to Letter or A4.</p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={sendingImg14}
          alt=""
        />
        <p className="mt-6">
          4. Alternatively, you can go to Account Settings {">"} General {">"}{" "}
          Preferences.
        </p>
        <p>5. Select your desired paper size under Page Options.</p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={sendingImg15}
          alt=""
        />
      </>
    ),
  },
  {
    title: "How to send a Fax",
    content: (
      <>
        <p>1. Log in to your iFax web dashboard.</p>
        <p>2. Click on “New Fax” at the bottom right corner of the screen.</p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={sendingImg16}
          alt=""
        />
        <p className="mt-6">
          3. Input the Recipient Fax Number, name of recipient, your name,
          subject, and comments (optional)
        </p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={sendingImg17}
          alt=""
        />
        <p className="mt-6">
          4. Select from different templates available by clicking on the left
          or right arrow keys
        </p>
        <p>
          5. Drop document to be faxed in the blue box area underneath the cover
          page
        </p>
        <p>6. Click Send.</p>
      </>
    ),
  },
  {
    title: "How to change the caller ID for outgoing faxes",
    content: (
      <>
        <p>1. Click New Fax {">"} Compose Fax.</p>
        <p>
          2. Click the three dots icon at the top-right of the Compose window.
        </p>
        <p>3. From the drop-down list, hover over the Caller ID option.</p>
        <p>
          4. Set your desired Outbound Fax Caller ID. Our web app will
          automatically save the changes you made.
        </p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={sendingImg18}
          alt=""
        />
        <p className="mt-6">
          You can update the caller ID based on how many fax numbers you own.
          This way, it will be easier for recipients to decide whether to accept
          or reject the message based on the fax number shown.
        </p>
      </>
    ),
  },
  {
    title: "How to adjust the fax image quality",
    content: (
      <>
        <p>1. From your iFax dashboard, click New Fax {">"} Compose Fax.</p>
        <p>
          2. Upload your document. Once uploaded, click the drop-down option for
          adjusting fax quality at the top of the compose window (as shown in
          the image below).
        </p>
        <p>3. Choose any of these three options: basic, standard, and fine.</p>
        <Image
          className="w-full max-w-[80%] m-auto mt-6"
          src={sendingImg19}
          alt=""
        />
        <p className="mt-6">
          Note: Adjusting the fax image quality may incur additional charges.
          Prices may vary depending on the recipient’s country. To get an
          estimate of how much it will cost per page, go to Account Settings{" "}
          {">"} Preferences. Under Quality, select your recipient’s country. You
          may view the price per page for basic, standard, and fine faxes on the
          drop-down menu.
        </p>
      </>
    ),
  },
];
