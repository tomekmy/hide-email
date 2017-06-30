Usage example:

```
<div id="address_email">e-mail: </div>

<script type="text/javascript">
        $('#address_email').hideEmail('user', 'domain.com');
</script>
```

You can add optional third parameter.
Third parameter should be any HTML tag. It just be surrounded by <a href="mailto:"></a>

```
<div id="address_email"></div>

<script type="text/javascript">
        $('#address_email').hideEmail('user', 'domain.com', '<img src="img_path/image.png" alt="Your image" />');
</script>
```
