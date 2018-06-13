webpackJsonp([0xa990e697c101],{360:function(e,t){e.exports={data:{contentfulBlog:{title:"Exporting data from a Rails's Application",slug:"exporting-data-from-a-rails-appliocation",subHeading:"Exporting data from Rails models to *.csv and and *.xlsx",published:"2016-12-05T00:00+08:00",content:{childMarkdownRemark:{html:'<h1>Exporting data from a Rail’s Application</h1>\n<p>If you’ve got a Rails Application and want to export information from the database there are many options. We’ll use Rail’s ability to <a href="http://guides.rubyonrails.org/action_controller_overview.html#restful-downloads">respond to different formats</a> within the standard RESTful routes to export data from the Student and School models in the sample app (view the repository <a href="https://github.com/105ron/csv-export">here</a>).</p>\n<p>The application is hosted on Heroku <a href="https://export-csv-sample.herokuapp.com/">here</a> and has been seeded with some basic data. Each student ‘belongs_to’ a school which has it’s own model that contains the school’s name and address.</p>\n<h3>Export to CSV</h3>\n<p>First we will start with exporting a comma separated value file. This file is very simple, can be read by text editors and widely supported so it will allow you to import the data into another application.</p>\n<p>The CSV class is now included in the standard Ruby library since ~> 1.9.2 so all we have to do is to ‘require CSV’ within the Rail’s Application. Although it is a simple format, it can be troublesome to save and load data which itself contains quotes and commas.</p>\n<p>In the sample application the goal is to save the data in the student model and the rows association data in the school model. To do this we will use the ActiveRecord <a href="http://guides.rubyonrails.org/active_record_querying.html#joins">joins</a> and <a href="http://guides.rubyonrails.org/active_record_querying.html#selecting-specific-fields">select</a> methods to query our database and return our Student::ActiveRecord_Relation.</p>\n<iframe src="https://medium.com/media/a5a15a035a2c66c76d5c49de45add7b3" frameborder=0></iframe>\n<p>If we open the Rail’s Console and run the code you will notice it does not return the fields from the joined schools table.</p>\n<iframe src="https://medium.com/media/477bb7ef1fd537c7ba1def53efdafa77" frameborder=0></iframe>\n<p>ActiveRecord will only return items in Student class. To see the fully joined result we would need to open the database. (Postgres in this case and *psql csv-export_development *from the terminal {not the Rail’s console} to open the database, then we can run the raw SQL) We can however check from the console the columns are included in the result by chaining the column name (and including first so we only have one result) onto the end of the method like so…</p>\n<iframe src="https://medium.com/media/03969c91e962589d1f7bce9167b761f4" frameborder=0></iframe>\n<p>Now that we have our complete ActiveRecord object we need a method in the Student model to turn it into a CSV.</p>\n<iframe src="https://medium.com/media/4e4ea62e36bfe50633efe7a25d8d7cb4" frameborder=0></iframe>\n<p>Here we create an array ‘columns’ with the names of the columns in our table we wish to be included in the CSV file. As we renamed the columns in the schools table via the ActiveRecord query (i.e. schools.name as school<em>name) we must now use ‘school</em>name’ and ‘school_address’ to access the data in these columns. We use Ruby’s <a href="https://ruby-doc.org/core-2.2.0/Array.html#method-i-map">map</a> enumerable and Rail’s <a href="http://apidock.com/rails/String/humanize">humanize</a> method to create the first row in the CSV file from the columns array, this will be the title for each column.</p>\n<p>Then we use the class method we created earlier with all the data from the tables in the database with the <a href="https://ruby-doc.org/core-2.2.0/Array.html#method-i-each">each</a> enumerable to add a new row for every record in the students table. Now all we need is to be able call this method from within our controller.</p>\n<iframe src="https://medium.com/media/21cdddd38c1cbf64134d694631fd8193" frameborder=0></iframe>\n<p>You can see from the <em>Rail’s routes</em> that Rail’s standard RESTful routes allow use to use different formats apart from HTML.</p>\n<iframe src="https://medium.com/media/31c5a99eaa3493ec67e762daefb6044e" frameborder=0></iframe>\n<p>With the <a href="http://api.rubyonrails.org/classes/ActionController/MimeResponds.html">respond_to</a> block we now allow a .csv request to <a href="http://api.rubyonrails.org/classes/ActionController/DataStreaming.html#method-i-send_data">send_data</a> (save a file) from the ‘as_csv’ method we created earlier in the Student model. Now all we need is to include a link within the view of the app so a user can access the method.</p>\n<iframe src="https://medium.com/media/d9ce245d3b15b55b0dd1575d70cbd5ad" frameborder=0></iframe>\n<p>Which is just a matter of specifying the format in the normal Rail’s <a href="http://api.rubyonrails.org/classes/ActionView/Helpers/UrlHelper.html#method-i-link_to">link_to</a> helper. Now we have everything in place when we click the link we should see…</p>\n<p><img src="https://cdn-images-1.medium.com/max/2216/1*IVDd5HJSAqDzW-eokE54Rw.png" alt="Pop up to save the link"><em>Pop up to save the link</em></p>\n<p>Once we save an open the file we have all the the data from our tables saved to the local computer and easily viewable in a table like this.</p>\n<p><img src="https://cdn-images-1.medium.com/max/4012/1*CJkoXBUQ2m9_6EgjV5NIrw.png" alt="Our CSV table generated through the Rail’s App."><em>Our CSV table generated through the Rail’s App.</em></p>\n<h3>Export to XLSX</h3>\n<p>The next challenge is to save to an XLSX file. For this will be using the <a href="https://github.com/straydogstudio/axlsx_rails">Axlsx-Rail’s — Spreadsheet templates for Rail’s</a> gem. The first step will be to include the required Gems in the Rail’s App Gemfile…</p>\n<iframe src="https://medium.com/media/1bb8449386d3f198394f46f99a356b51" frameborder=0></iframe>\n<p>Once added to the Gemfile we must save and run* bundle install* from the terminal. Now we have installed it, it would be wise to look at the <a href="https://github.com/randym/axlsx">readme for the Aslsx gem</a>. You will see it allows you to do quite a lot but there are known issues with Google Docs, Libre Office and Apple Numbers. You should check these and make sure it is the right option for you app.</p>\n<p>We will use the <em>all<em>with</em>school_details</em> class method we created in the CSV section to provide the data. This gem requires us to make view with the extension *<em>.xlsx.axlsx</em>. So we will setup the controller to respond to XLSX requests and add a link to <em>index.html.erb</em> like so…</p>\n<iframe src="https://medium.com/media/c4a124467444e79f4ca56b40b6d89666" frameborder=0></iframe>\n<p>Now it is a matter of creating the view and reading the <a href="http://www.rubydoc.info/github/randym/axlsx/toplevel">documentation</a> to output the XLSX file with the data and format desire. The view extension must be *<em>.xlsx.axlsx *and as we are in the Students#index we will call the file *index.xlsx.axlsx *in the */app/views/students</em> folder which means we are using the Standard Rail’s convention.</p>\n<iframe src="https://medium.com/media/7e93f20694272c62a7b725cff4d7ced6" frameborder=0></iframe>\n<p>The above code in the view above will style the headings like on the <a href="https://export-csv-sample.herokuapp.com/">website</a>. There is many styling options which can be applied to individual columns and the ability to create multiple sheets in the one file.</p>\n<p><img src="https://cdn-images-1.medium.com/max/5168/1*rQcwMEwWWORDrZCG7aZ4Mg.png" alt="The final output of students.xlsx"><em>The final output of students.xlsx</em></p>\n<p>Once you click and save the file you can see here the output of the App. It looks very similar to the CSV but the AXSLX gem includes many more features not included in this article and not available with simple CSV file exports.</p>\n<h3>Conclusion</h3>\n<p>Working with Rail’s conventions makes exporting data from your models straightforward. If you have things you think should be in this tutorial or corrections to help new comers to Rail’s, you can contact me via Twitter @rhysonrails or visit <a href="http://rhysbrooker.com">rhysbrooker.com</a>.</p>'}}}},pathContext:{slug:"exporting-data-from-a-rails-appliocation"}}}});
//# sourceMappingURL=path---exporting-data-from-a-rails-appliocation-4ce866118eae3106f5fa.js.map